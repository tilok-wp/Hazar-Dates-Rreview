import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import useGraphData from '../../hooks/useGraphData';

const GraphBarChart = () => {
    const [graphData, setGraphData] = useGraphData();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={550} height={400} data={graphData}>
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="green" />
                <XAxis dataKey={'month'}></XAxis>
            </BarChart>

        </ResponsiveContainer>
    );
};

export default GraphBarChart;