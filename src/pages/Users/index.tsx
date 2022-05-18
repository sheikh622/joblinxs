import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppGridContainer } from "../../@crema";
import { Fonts } from "../../shared/constants/AppEnums";
import { Box, Grid, TextField } from "@mui/material";
import AppAnimate from "../../@crema/core/AppAnimate";
import IntlMessages from "../../@crema/utility/IntlMessages";
import PlayerTable from "./LeaderBoardTable";
import AppCard from "@crema/core/AppCard";
import "./style.css";
import MenuItem from '@mui/material/MenuItem';
import { getUsersList, changeUsersActivePage } from "../../redux/userManagement/actions";
import images from "../../assets/images/noData.png";
import Autocomplete from '@mui/material/Autocomplete';
import AppSelect from "@crema/core/AppSelect";
const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.User);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [adminId, setAdminId] = useState<number>(0);

  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [type, setType] = React.useState('provider');
  const handleChange = (event) => {
    setType(event.target.value);
  };
  useEffect(() => {
    if (search != undefined) {
      dispatch(changeUsersActivePage(0));
      // dispatch(
      //   getUsersList({
      //     page: 1, limit: 5,

      //   })
      // )
    }
  }, [search])
  useEffect(() => {
    dispatch(
      getUsersList({
        page: 1, limit: 5,
        adminId: "",
        type: type,
        search: search,
      })
    )
  }, [type, search, page])
  const currencies = [
    {
      value: 'provider',
      label: 'service provider',
    },
    {
      value: 'seeker',
      label: 'service seeker',
    },
  ];
  console.log("type", type)
  const [profile, setProfile] = useState(false);
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
                <TextField
                  id='outlined-select-type'
                  select
                  label='Select'
                  value={type}
                  onChange={handleChange}
                  // helperText='Please select your type'
                  sx={{ width: 200, display: "inline-block", marginLeft: 172 }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <PlayerTable
                  userTableData={
                    userList &&
                    userList?.Users
                  }
                  pageCount={page}
                  usertype={type}
                  searchBar={search}
                  limit={limit}
                  adminId={adminId}
                />
              </AppCard>
            </Grid>
          </AppGridContainer>
        </Box>
      </AppAnimate>

    </>
  );
};

export default User;

