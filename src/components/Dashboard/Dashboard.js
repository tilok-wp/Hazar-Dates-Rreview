import React from 'react';
import GraphAreaChart from '../GraphAreaChart/GraphAreaChart';
import GraphBarChart from '../GraphBarChart/GraphBarChart';
import GraphLineChart from '../GraphLineChart/GraphLineChart';
import GraphPieChart from '../GraphPieChart/GraphPieChart';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='my-24'>
            < h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase mb-3' > Our business overview of 2022 </h3>
            <div className='container mx-auto grid md:grid-cols-2 gap-5'>
                <div className='graph-box bg-slate-50 my-5'>
                    <h3 className='text-xl mb-5'>Monthly sales review</h3>
                    <GraphLineChart></GraphLineChart>
                </div>
                <div className='graph-box bg-slate-50 my-5'>
                    <h3 className='text-xl mb-5'>Revenue VS investment </h3>
                    <GraphPieChart></GraphPieChart>
                </div>
                <div className='graph-box bg-slate-50 my-5'>
                    <h3 className='text-xl mb-5'>Revenue With investment flow </h3>
                    <GraphBarChart></GraphBarChart>
                </div>
                <div className='graph-box bg-slate-50 my-5'>
                    <h3 className='text-xl mb-5'>Investment With Revenue graph </h3>
                    <GraphAreaChart></GraphAreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;