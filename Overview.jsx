import React, {useEffect, useState} from 'react';
import { generateKey, getNationalSummary } from '../api/apiClient';
import SummaryCard from '../components/SummaryCard';
import SimpleBar from '../components/BarChart';

export default function Overview() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');

  useEffect(()=>{
    async function load(){
      try {
        const keyRes = await generateKey();
        const key = keyRes.api_key;
        const sumRes = await getNationalSummary(key);
        setSummary(sumRes.data || sumRes);
      } catch (e) {
        setError(e.message || 'Failed to load summary');
      } finally {
        setLoading(false);
      }
    }
    load();
  },[]);

  if (loading) return <div className="container"><div className="card">Loading...</div></div>;
  if (error) return <div className="container"><div className="card" style={{color:'red'}}>{error}</div></div>;

  const genBySource = summary.generation_by_source_df || [];

  // ensure array of objects for recharts
  const chartData = Array.isArray(genBySource) ? genBySource : Object.entries(genBySource).map(([k,v])=>({source:k,generation_MWh:v}));

  return (
    <div className="container">
      <div className="card">
        <h2>🌍 National Energy Insights - Overview</h2>
        <p>Summary of generation and emissions</p>
      </div>

      <div className="grid">
        <SummaryCard title="Total Generation (MWh)" value={new Intl.NumberFormat().format(summary.total_generation || 0)} />
        <SummaryCard title="Total Emissions (tCO2)" value={new Intl.NumberFormat().format(summary.total_emissions || 0)} />
        <SummaryCard title="Renewable Share (%)" value={(summary.renewable_share||0) + '%'} />
      </div>

      <div style={{marginTop:16}}>
        <h3>Generation by Source</h3>
        <SimpleBar data={chartData} dataKey="generation_MWh" />
      </div>
    </div>
  )
}
