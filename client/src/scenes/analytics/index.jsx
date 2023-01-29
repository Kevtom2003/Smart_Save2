import React from 'react';
import Graph from "../../components/Graph";
import { useState } from 'react';
import primaryData from '../dashboard/data.js'
import dataVals from './data.js';
import ReactApexChart from "react-apexcharts";
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const Analytics = () => {
  const [state, setState] = useState({
    series: [{
      name: 'SPDR S&P 500 ETF Trust (SPY)',
      data: primaryData
    }],
    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'SPDR S&P 500 ETF Trust (SPY)',
        align: 'left'
      },
      
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false
        },
        type: 'datetime'
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      }
    },
  })
  function buttonClicked(){
    setState({
      series: [{
        name: 'SPDR S&P 500 ETF Trust (SPY)',
        data: dataVals
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'SPDR S&P 500 ETF Trust (SPY)',
          align: 'left'
        },
        
        yaxis: {
          labels: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false
          },
          type: 'datetime'
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0)
            }
          }
        }
      },
    })
  }
    return (  
      <div>
        <ReactApexChart options={state.options} series={state.series} type="line" height={350}/>
        <Box textAlign={'center'}>Enter Smart Score</Box>
        <Button font-color={'black'} onClick={buttonClicked}>Bad Smart Score</Button>
      </div>
    );

};

export default Analytics;