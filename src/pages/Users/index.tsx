import AppCard from "@crema/core/AppCard";
import { Box, Grid, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppGridContainer } from "../../@crema";
import AppAnimate from "../../@crema/core/AppAnimate";
import IntlMessages from "../../@crema/utility/IntlMessages";
import {
  changeUsersActivePage,
  getUsersList,
} from "../../redux/userManagement/actions";
import { Fonts } from "../../shared/constants/AppEnums";
import PlayerTable from "./LeaderBoardTable";
import "./style.css";
const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.User);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [adminId, setAdminId] = useState<number>(0);
  const [type, setType] = React.useState("");
  const handleChange = (event) => {
    setType(event.target.value);
  };
  useEffect(() => {
    if (search != undefined) {
      dispatch(changeUsersActivePage(0));
    }
  }, [search]);
  useEffect(() => {
    dispatch(
      getUsersList({
        page: page,
        limit: limit,
        type: type,
        search: search,
      })
    );
  }, [type, search, page, limit]);
  const currencies = [
    {
      value: "",
      label: "All Users",
    },
    {
      value: "provider",
      label: "service provider",
    },
    {
      value: "seeker",
      label: "service seeker",
    },
  ];
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
              <AppCard contentStyle={{ px: 0 }}>
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
                  id="outlined-select-type"
                  select
                  label="Select"
                  value={type}
                  onChange={handleChange}
                  sx={{  display: "inline-block", marginLeft: 19 }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <PlayerTable
                  userTableData={userList && userList?.Users}
                  page={page}
                  setPage={setPage}
                  limit={limit}
                  setLimit={setLimit}
                  search={search}
                  setSearch={setSearch}
                  usertype={type}
                  adminId={adminId}
                  setAdminId={setAdminId}
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
