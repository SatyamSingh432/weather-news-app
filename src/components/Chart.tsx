import React ,{useState}from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';



const ExampleChart: React.FC = ({forecast}) => {

  const data = [
  { name: 'Day 1', temp: Math.round(forecast[0].main.temp - 273)},
  { name: 'Day 2', temp: Math.round(forecast[1].main.temp - 273) },
  { name: 'Day 3', temp: Math.round(forecast[2].main.temp - 273) },
  { name: 'Day 4', temp: Math.round(forecast[3].main.temp - 273)},
  { name: 'Day 5', temp: Math.round(forecast[4].main.temp - 273) },
  { name: 'Day 6', temp: Math.round(forecast[5].main.temp - 273) },
  { name: 'Day 7', temp: Math.round(forecast[6].main.temp - 273) }
];
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExampleChart;
