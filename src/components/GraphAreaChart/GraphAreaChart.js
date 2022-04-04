import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useGraphData from '../../hooks/useGraphData';

const GraphAreaChart = () => {
    const [graphData, setGraphData] = useGraphData();
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={graphData} >
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <XAxis dataKey={'month'}></XAxis>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default GraphAreaChart;