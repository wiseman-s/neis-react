import React from 'react';

export default function SummaryCard({title, value}) {
  return (
    <div className="card">
      <h4 style={{margin:'0 0 8px 0'}}>{title}</h4>
      <div style={{fontSize:24, fontWeight:700}}>{value}</div>
    </div>
  )
}
