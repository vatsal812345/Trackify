import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, Cell } from 'recharts';

const data = [
  { name: 'Inactive', value: 30, fill: '#64748b' },
  { name: 'Low', value: 45, fill: '#ef4444' },
  { name: 'Neutral', value: 65, fill: '#eab308' },
  { name: 'Productive', value: 80, fill: '#22c55e' },
];

const style = {
  top: '50%',
  right: '5%',
  transform: 'translate(0, -50%)',
  lineHeight: '32px',
};

const ProductivityChart = () => {
  return (
    <div className="card h-full p-6 flex flex-col">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Productivity</h2>
      <div className="flex-1 min-h-[300px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="40%" 
            cy="50%" 
            innerRadius="30%" 
            outerRadius="100%" 
            barSize={12} 
            data={data}
            startAngle={180}
            endAngle={-180}
          >
            {/* Background Bars */}
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
            />
            <Legend 
              iconSize={12} 
              layout="vertical" 
              verticalAlign="middle" 
              wrapperStyle={style} 
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm font-medium text-slate-600 dark:text-zinc-400 ml-2">
                  {value}
                </span>
              )}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductivityChart;
