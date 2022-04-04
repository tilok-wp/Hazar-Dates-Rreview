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
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#4b76e3" fill="#4b76e3" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#e3994b" fill="#e3994b" />
                <XAxis dataKey={'month'}></XAxis>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default GraphAreaChart;