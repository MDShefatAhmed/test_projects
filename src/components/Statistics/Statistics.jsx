import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'Assignment 1',
          Marks: 48,
        },
        {
          name: 'Assignment 2',
          Marks: 59,
        },
        {
          name: 'Assignment 3',
          Marks: 59,
        },
        {
          name: 'Assignment 4',
          Marks: 40,
        },
        {
          name: 'Assignment 5',
          Marks: 52,
        },
        {
          name: 'Assignment 6',
          Marks: 37,
        },
        {
          name: 'Assignment 7',
          Marks: 60,
        },
        {
          name: 'Assignment 8',
          Marks: 56,
        },
      ];
    return (
        <div>
            <h1 className='text-center font-extrabold text-3xl text-green-400 mt-8'>My Assignment Marks</h1>
            <div className='px-8 mt-8' style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Marks" stroke="8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
        </div>
    );
};

export default Statistics;