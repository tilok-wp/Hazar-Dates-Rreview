import React from 'react';
import GraphAreaChart from '../GraphAreaChart/GraphAreaChart';
import GraphBarChart from '../GraphBarChart/GraphBarChart';
import GraphLineChart from '../GraphLineChart/GraphLineChart';
import GraphPieChart from '../GraphPieChart/GraphPieChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='container mx-auto grid md:grid-cols-2 gap-3 my-9'>
            <div className='graph-box'>
                <h3>Monthly sales review</h3>
                <GraphLineChart></GraphLineChart>
            </div>
            <div className='graph-box'>
                <h3>Monthly sales review</h3>
                <GraphPieChart></GraphPieChart>
            </div>
            <div className='graph-box'>
                <h3>Monthly sales review</h3>
                <GraphBarChart></GraphBarChart>
            </div>
            <div className='graph-box'>
                <h3>Monthly sales review</h3>
                <GraphAreaChart></GraphAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;