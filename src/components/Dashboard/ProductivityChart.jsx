import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend, Cell } from 'recharts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const data = [
  { name: 'Inactive', value: 30, fill: '#64748b' },
  { name: 'Low', value: 45, fill: '#ef4444' },
  { name: 'Neutral', value: 65, fill: '#eab308' },
  { name: 'Productive', value: 80, fill: '#22c55e' },
];

const style = {
  top: '50%',
  right: '0%',
  transform: 'translate(0, -50%)',
  lineHeight: '32px',
};

const ProductivityChart = () => {
  return (
    <Card className="glass border-none shadow-sm h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-2 border-b border-slate-100 dark:border-zinc-800/50">
        <CardTitle className="text-xl font-black tracking-tight uppercase text-[15px] text-slate-600 dark:text-zinc-400">Analysis</CardTitle>
        <CardDescription>Productivity breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-6 relative min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="35%" 
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
              iconSize={10} 
              layout="vertical" 
              verticalAlign="middle" 
              wrapperStyle={style} 
              iconType="circle"
              formatter={(value) => (
                <span className="text-[11px] font-black text-slate-500 dark:text-zinc-500 ml-2 uppercase tracking-widest">
                  {value}
                </span>
              )}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductivityChart;
