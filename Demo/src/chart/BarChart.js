import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {

    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'April',
            'May',
        ],
        datasets: [
            {
                label: 'Sales 2020 (M)',
                data: [3, 2, 2, 1, 5],
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderWidth: 5

            },
            {
                label: 'Sales 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <Bar
            // height={400}
            // width={600}
            data={data}
            options={options}
        //options={{ maintainAspectRatio: false }} //for manage scroll bar

        />
    )
}

export default BarChart;
