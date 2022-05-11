import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppTableContainer from "../../@crema/core/AppTableContainer";
import TableContainer from "@mui/material/TableContainer";
import { AppGridContainer } from "../../@crema";
import { Fonts } from "../../shared/constants/AppEnums";
import { Box, Grid, TextField } from "@mui/material";
import AppAnimate from "../../@crema/core/AppAnimate";
import IntlMessages from "../../@crema/utility/IntlMessages";
import PlayerTable from "./LeaderBoardTable";
import AppCard from "@crema/core/AppCard";
import { Button } from "@mui/material";
import "./style.css";
import { getUsersList, changeUsersActivePage } from "../../redux/userManagement/actions";
import images from "../../assets/images/noData.png";
import Profile from "./Modal/Profile"
import Autocomplete from '@mui/material/Autocomplete';

const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.User);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  console.log("userList==========", userList);
  //  const [search, setSearch] = React.useState("");
  useEffect(() => {
    if (search != undefined) {
      dispatch(changeUsersActivePage(0));
      dispatch(
        getUsersList({
          page: 1, limit: 5,
          search: search,
        })
      )
    }
  }, [search])
  useEffect(() => {
    dispatch(
      getUsersList({
        page: 1, limit: 5,
        search: "",
        adminId: "",
      })
    )
  }, [])
  const top100Films = [
    { label: 'Service Provider' },
    { label: 'Service Seeker' },
    { label: 'Personal' },
    { label: 'Business Profile' },
  ];
  const [profile, setProfile] = useState(false);
  const handleClick = () => setProfile(false);
  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <Box>
          <Box
            component="h2"
            sx={{
              color: "text.primary",
              fontWeight: Fonts.BOLD,
              mb: 6,
              fontSize: 22,
              display: "inline-block",
            }}
          >
            <IntlMessages id="Users.mainHeading" />
          </Box>
          <AppGridContainer>
            <Grid item xs={12} md={12}>
              <AppCard
                contentStyle={{ px: 0 }}
              >

                <TextField
                  sx={{ display: "inline-block", marginLeft: 6 }}
                  placeholder="Search Text"
                  label="Search"
                  value={search}
                  onChange={(event: any) => {
                    setSearch(event.target.value);
                  }}
                />
                <Autocomplete
                  disablePortal
                  id='combo-box-demo'
                  options={top100Films}
                  sx={{ width: 200, display: "inline-block", marginLeft: 6 }}
                  renderInput={(params) => <TextField {...params} label='User Type' />}
                />
                {userList &&
                  userList?.Users?.users?.length > 0 ? (
                  <PlayerTable
                    userTableData={
                      userList &&
                      userList?.Users
                    }
                  />
                )
                  :
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={images} alt={""} />
                  </div>
                }
              </AppCard>
            </Grid>
          </AppGridContainer>
        </Box>
      </AppAnimate>
      <Profile show={profile} onHide={handleClick} />
    </>
  );
};

export default User;
