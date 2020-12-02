import React from 'react';
import { Pie ,defaults} from 'react-chartjs-2';

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';
const PieChart = () => {

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
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Pie Chart'
        },
        legend: {
            labels: {
                fontColor: 'red',
                fontSize:15
            }
        }
    }

    return (
        <Pie
            data={data}
            options={options}
        />
    )
}

export default PieChart;