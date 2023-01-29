import React from 'react';
import ReactApexChart from "react-apexcharts";
import { useState } from 'react';
import { Box } from '@mui/system';

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
      <Box>
        <ReactApexChart options={state.options} series={state.series} type="donut" width={400} />
      </Box>
    );

};

export default Budget;