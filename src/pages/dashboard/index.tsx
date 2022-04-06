import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
// import StatisticsCard from "./StatisticsCard/index";
// import Activity from "./AppActivity/index";
import player from "../../assets/images/players.png";
import Admin from "../../assets/images/Admin.png";
import FlaggedMedia from "../../assets/images/FlaggedMedia.png";
import FlaggedUsers from "../../assets/images/FlaggedUsers.png";
import revenue from "../../assets/images/revenue.png";
import image from "../../assets/icon/coming.webp"
const DashboardStatistics = [
  {
    id: 1,
    category: "Total Users",
    name: "20k",
    bgColor: "#0A8FDC",
    time: "9 AM",
    icon: player,
  },
  {
    id: 2,
    category: "Flagged Users",
    name: "915",
    bgColor: "#00B59C",
    time: "10 AM",
    icon: player,
  },

  {
    id: 3,
    category: "Total Admins",
    name: "20",
    bgColor: "#FFA940",
    time: "11 AM",
    icon: revenue,
  },
];
const Activitydata = [
  { name: "Jan",   FlaggedUsers: 27, Admin: 20 },
  { name: "Feb",  FlaggedUsers: 20, Admin: 23 },
  { name: "Mar",   FlaggedUsers: 28, Admin: 24 },
  { name: "Apr",  FlaggedUsers: 25, Admin: 26 },
  { name: "May",   FlaggedUsers: 30, Admin: 23 },
  { name: "Jun",   FlaggedUsers: 25, Admin: 29 },
  { name: "Jul",   FlaggedUsers: 30, Admin: 22 },
  { name: "Aug",   FlaggedUsers: 24, Admin: 28 },
  { name: "Sep",   FlaggedUsers: 30, Admin: 27 },
  { name: "Oct",   FlaggedUsers: 27, Admin: 28 },
  { name: "Nov",   FlaggedUsers: 24, Admin: 23 },
  { name: "Dec",   FlaggedUsers: 27, Admin: 37 },
];
const Home = () => {
  return (
    <>
      <Grid item xs={12} md={12}>
        <div style={{ display: "flex" }}>
          {DashboardStatistics.map((data, index) => (
            <>
              {data.id < 4 ? (
                <Grid item xs={12} sm={12} lg={4} mr={6} mb={6} key={index}>
                  {/* <StatisticsCard data={data} /> */}
                  <img src={image}/>

                </Grid>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>

        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} sm={12} mt={2} mb={2}>
            {/* <Activity data={Activitydata} /> */}
          </Grid>
        </Grid>
        <div style={{ display: "flex" }}>
          {DashboardStatistics.map((data, index) => (
            <>
              {data.id > 3 ? (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={4}
                  mt={6}
                  mr={6}
                  mb={6}
                  key={index}
                >
                  {/* <StatisticsCard data={data} /> */}
                </Grid>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </Grid>
    </>
  );
};

export default Home;
