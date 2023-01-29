import React from 'react';
import {
    Box,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
  import { DataGrid } from "@mui/x-data-grid";
  import BreakdownChart from "components/BreakdownChart";
  import OverviewChart from "components/OverviewChart";
  import { useGetDashboardQuery } from "state/api";
  import StatBox from "./StatBox";
  import {
    DownloadOutlined,
    Email,
    PointOfSale,
    PersonAdd,
    Traffic,
    Analytics,
    Fastfood,
    Restaurant
  } from "@mui/icons-material";

const Deals = () => {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    return     ( 
        <div>
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Deals for you" subtitle="Enjoy the Savings" />
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
          title="Chipotle"
          value="BOGO Sale"
          increase= <a href="https://www.chipotle.com/bogo" target="_blank">Get your deal</a>
          description="Expires 12/31/23"
          icon={
            <Restaurant
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="McDonalds"
          value="Exclusive Deals"
          increase= <a href="https://www.mcdonalds.com/us/en-us/deals.html" target="_blank">Get your deal</a>
          description="Valid  through 12/31/23"
          icon={
            <Fastfood
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        </Box>
        </Box>
        </div>
  );

};

export default Deals;