import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May'
    ],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [13, 12, 12, 11, 15],
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointBorderColor: 'rgba(255, 206, 86, 0.2)'
      },
      {
        label: 'Sales 2019 (M)',
        data: [1, 3, 2, 2, 3],
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Line Chart'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 15,
            stepSize: 1
          }
        }
      ]
    }
  }

  return (
    <Line
      data={data}
      options={options}
    />
  )
}

export default LineChart;

// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import axios from "axios";

// const Dankmemes = () => {
//   const [chartData, setChartData] = useState({});
//   const [employeeSalary, setEmployeeSalary] = useState([]);
//   const [employeeAge, setEmployeeAge] = useState([]);

//   const chart = () => {
//     let empSal = [];
//     let empAge = [];
//     axios
//       .get("http://dummy.restapiexample.com/api/v1/employees")
//       .then(res => {
//         console.log(res);
//         for (const dataObj of res.data.data) {
//           empSal.push(parseInt(dataObj.employee_salary));
//           empAge.push(parseInt(dataObj.employee_age));
//         }
//         setChartData({
//           labels: empAge,
//           datasets: [
//             {
//               label: "level of thiccness",
//               data: empSal,
//               backgroundColor: ["rgba(75, 192, 192, 0.6)"],
//               borderWidth: 4
//             }
//           ]
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(empSal, empAge);
//   };

//   useEffect(() => {
//     chart();
//   }, []);
//   return (
//     <div className="App">
//       <h1>Dankmemes</h1>
//       <div>
//         <Line
//           data={chartData}
//           options={{
//             responsive: true,
//             title: { text: "THICCNESS SCALE", display: true },
//             scales: {
//               yAxes: [
//                 {
//                   ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true
//                   },
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ],
//               xAxes: [
//                 {
//                   gridLines: {
//                     display: false
//                   }
//                 }
//               ]
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dankmemes;