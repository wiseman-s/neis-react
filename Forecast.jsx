import React from 'react';

export default function Forecast(){
  return (
    <div className="container">
      <div className="card">
        <h2>📈 Forecasting</h2>
        <p>This frontend requests forecasts from the backend. If unavailable, implement simple JS forecast.</p>
      </div>
      <div className="card">
        <p>Forecasts are generated server-side (Python) to preserve accuracy.</p>
      </div>
    </div>
  )
}
