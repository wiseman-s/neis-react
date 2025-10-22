import React from 'react';
import Overview from './pages/Overview';
import CountyInsights from './pages/CountyInsights';
import Forecast from './pages/Forecast';
import Reports from './pages/Reports';

function App(){
  const [page, setPage] = React.useState('Overview');

  return (
    <div>
      <div className="header">
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div><strong>NEIS</strong> - National Energy Insights System</div>
          <div>
            <button onClick={()=>setPage('Overview')} style={{marginRight:8}}>Overview</button>
            <button onClick={()=>setPage('County')} style={{marginRight:8}}>County Insights</button>
            <button onClick={()=>setPage('Forecast')} style={{marginRight:8}}>Forecast</button>
            <button onClick={()=>setPage('Reports')}>Reports</button>
          </div>
        </div>
      </div>

      {page === 'Overview' && <Overview />}
      {page === 'County' && <CountyInsights />}
      {page === 'Forecast' && <Forecast />}
      {page === 'Reports' && <Reports />}

      <div className="footer">System by Simon Wanyoike | Contact: symoprof83@gmail.com</div>
    </div>
  )
}

export default App;
