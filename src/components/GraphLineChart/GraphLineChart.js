import React from 'react';
import useGraphData from '../../hooks/useGraphData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraphLineChart = () => {
    const [graphData, setGraphData] = useGraphData();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={graphData}>
                <Line type="monotone" dataKey="sell" stroke="#4b76e3" />
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'month'}></XAxis>
            </LineChart>
        </ResponsiveContainer>

    );
};

export default GraphLineChart;