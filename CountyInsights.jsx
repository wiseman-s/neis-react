import React, {useState, useEffect} from 'react';
import { generateKey, getNationalSummary } from '../api/apiClient';
import SimpleBar from '../components/BarChart';

export default function CountyInsights(){
  const [summary, setSummary] = useState(null);
  const [selected, setSelected] = useState('');
  const [counties, setCounties] = useState([]);

  useEffect(()=>{
    async function load(){
      try {
        const keyRes = await generateKey();
        const key = keyRes.api_key;
        const sumRes = await getNationalSummary(key);
        const data = sumRes.data || sumRes;
        setSummary(data);
        // try to derive counties from generation data if provided
        const gen = data.generation || [];
        const uniqueCounties = Array.from(new Set((gen || []).map(r=>r.county))).filter(Boolean);
        setCounties(uniqueCounties);
      } catch(e){
        console.error(e);
      }
    }
    load();
  },[]);

  return (
    <div className="container">
      <div className="card">
        <h2>🏙️ County Insights</h2>
        <p>Select a county to view details</p>
      </div>

      <div className="card">
        <label>Select County: </label>
        <select value={selected} onChange={e=>setSelected(e.target.value)}>
          <option value="">--select--</option>
          {counties.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="card">
        <h3>Generation by Source (Sample)</h3>
        {summary && <SimpleBar data={summary.generation_by_source_df || []} dataKey="generation_MWh" />}
      </div>
    </div>
  )
}
