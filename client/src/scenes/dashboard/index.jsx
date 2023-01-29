import React, { useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import ReactApexChart from "react-apexcharts";
import dataVals from './data.js';
import { useState } from 'react';

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Analytics
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import axios from "axios";

// axios.defaults.proxy.host = "http://localhost"
// axios.defaults.proxy.port = "5001"

const Dashboard = () => {
  const [tabledata, setTableData] = useState()

  useEffect(() => {
    // fetch('/transactions').then((data) => data.json()).then((data) => console.log(data)).catch((err) => console.log(err))
    axios.get('http://localhost:5001/api').then(data => console.log(data))
  }, [])

  
  
  const test_rows = [
    { id: 1, date: 'Snow', title: 'Jon', category: '35', amount: 50 },
    { id: 2, date: 'Lannister', title: 'Cersei', category: '42', amount: 50 },
    { id: 3, date: 'Lannister', title: 'Jaime', category: '45', amount: 50  },
    { id: 4, date: 'Stark', title: 'Arya', category: 16, amount: 50  },
    { id: 5, date: 'Targaryen', title: 'Daenerys', category: null, amount: 50  },
    { id: 6, date: 'Melisandre', title: null, category: 150, amount: 50  },
    { id: 7, date: 'Clifford', title: 'Ferrara', category: 44, amount: 50  },
    { id: 8, date: 'Frances', title: 'Rossini', category: 36, amount: 50  },
    { id: 9, date: 'Roxie', title: 'Harvey', category: 65, amount: 50  },
  ];
  

  
  const [state2, setState2] = useState({
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
  const [state, setState] = useState({
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


  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  
  const columns = [
    {
      id: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.primary[900],
              color: theme.palette.primary[500],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Smart Save Score"
          value="679"
          increase="+14%"
          description="Since last month"
          icon={
            <Analytics
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Top Spending"
          value="Chipotle"
          increase="+47%"
          description="In the last week"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <ReactApexChart options={state.options} series={state.series} type="line" height={300}/>
        </Box>
        <StatBox
          title="Budget Satus"
          value="$4000"
          description="Good Standing"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Yearly Savings"
          value={"$1034"}
          increase="+2.3%"
          description=""
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          
          <DataGrid
          rows={test_rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[9]}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >

          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Expenses By Category
          </Typography>
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of your expenses by category to help you see where you are spending the most
          </Typography>
            <Box marginTop={5}>
            <ReactApexChart options={state2.options} series={state2.series} type="donut" width={330} />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
