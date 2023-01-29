import React from 'react';
import ReactApexChart from "react-apexcharts";
import { useState } from 'react';

const Budget = () => {
    const [state, setState] = useState({
      series: [44, 55, 13, 33],
      options: {
        labels: ['Food', 'School', 'Leisure', 'Tuition'],
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      },
    })
    return (
      <div>
        <ReactApexChart options={state.options} series={state.series} type="donut" width={330} />
      </div>
    );

};

export default Budget;