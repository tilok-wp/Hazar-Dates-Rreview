import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import useGraphData from '../../hooks/useGraphData';

const GraphBarChart = () => {
    const [graphData, setGraphData] = useGraphData();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={550} height={400} data={graphData}>
                <Bar dataKey="investment" fill="#4b76e3" />
                <Bar dataKey="revenue" fill="orange" />
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>

        </ResponsiveContainer>
    );
};

export default GraphBarChart;