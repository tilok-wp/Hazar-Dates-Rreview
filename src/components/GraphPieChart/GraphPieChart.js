import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import useGraphData from '../../hooks/useGraphData';

const GraphPieChart = () => {
    const [graphData, setGraphData] = useGraphData();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie data={graphData} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={graphData} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default GraphPieChart;