import React, { useState } from 'react';
import Sidebar from './Sidebar';
import "./Dashboard.css";
import BardChart from './BardChart';
import { Line, Doughnut } from "react-chartjs-2";

import LineChart from './LineChart';

import { Chart, CategoryScale, LinearScale, Title, Legend, BarController, LineController, PointElement, BarElement, LineElement, ArcElement } from 'chart.js';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Register necessary controllers and elements
Chart.register(CategoryScale, LinearScale, Title, Legend, BarController, LineController, PointElement, BarElement, LineElement, ArcElement);

const Dashboard = () => {

    const { books } = useSelector((state) => state.sellBooks);
    const { users } = useSelector((state) => state.allUsers);
    const { orders } = useSelector((state) => state.allOrders);

    const Data = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823
        },
        {
            id: 2,
            year: 2017,
            userGain: 45677,
            userLost: 345
        },
        {
            id: 3,
            year: 2018,
            userGain: 78888,
            userLost: 555
        },
        {
            id: 4,
            year: 2019,
            userGain: 90000,
            userLost: 4555
        },
        {
            id: 5,
            year: 2020,
            userGain: 4300,
            userLost: 234
        }
    ];
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });


    //    line state 
    const outOfStock = 0;
    let totalAmount = 0;

    orders &&
        orders.forEach((item) => {
            totalAmount += item.totalPrice;
        })
    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, totalAmount],
            },
        ],
    };
    
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, 20 - outOfStock],
            },
        ],
    };
    return (
        <div className='dashboard min-h-screen'>
            <Sidebar />
            <div className="dashboardContainer">
                <h1>Dashboard</h1>
                <div className='px-12 flex gap-5 mb-10'>
                    <Link to="/admin/books" className='w-96 h-52 bg-primary rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total Books </h1>
                        <p className='text-xl font-bold text-white text-center'> {books?.length} + </p>
                    </Link>
                    <Link to="/admin/users" className='w-96 h-52 bg-orange-500 rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total users </h1>
                        <p className='text-xl font-bold text-white text-center'> {users?.length} + </p>
                    </Link>
                    <Link to="/admin/orders" className='w-96 h-52 bg-red-500 rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-center text-white font-bold text-3xl'> Total Orders </h1>
                        <p className='text-xl font-bold text-white text-center'> {orders?.length}+ </p>
                    </Link>
                </div>
                <div className='w-full flex flex-col lg:flex-row'>
                    <div className='w-full  lg:w-1/2'>
                        <BardChart chartData={chartData} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <LineChart chartData={chartData} />
                    </div>
                </div>
                <div> <h1 className='text-4xl font-bold text-center border-b-2 py-5'> Total Earned Amount </h1> </div>
                <div className='lineChart'>
                    <Line data={lineState} />
                </div>
                <div> <h1 className='text-4xl font-bold text-center border-b-2 py-5'> In stock or Out of Stock </h1> </div>
                <div className='doughnutChart'>
                    <Doughnut data={doughnutState} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;