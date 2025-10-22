import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function SimpleBar({data, dataKey}) {
  return (
    <div className="card" style={{height:320}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="source" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill="#0ea5a4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
