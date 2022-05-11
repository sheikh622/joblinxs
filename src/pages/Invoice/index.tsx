import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppTableContainer from "../../@crema/core/AppTableContainer";
import { AppGridContainer } from "../../@crema";
import { Fonts } from "../../shared/constants/AppEnums";
import { Box, Grid, Link, TableContainer, TextField } from "@mui/material";
import AppAnimate from "../../@crema/core/AppAnimate";
import IntlMessages from "../../@crema/utility/IntlMessages";
import PlayerTable from "./LeaderBoardTable";
import AppCard from "@crema/core/AppCard";
import { Button } from "@mui/material";
import images from "../../assets/images/noData.png"
import {
  getAdminList,
  changeAdminActivePage,
} from "../../redux/Invoice/actions";
import "./style.css";
import BasicBox from "../../shared/components/Box/index";
const Admin = () => {
  const dispatch = useDispatch();
  const adminList = useSelector((state: any) => state.admins);

  const [postId, setpostId] = useState("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  useEffect(() => {
    if (search != undefined) {
      dispatch(changeAdminActivePage(0));
      dispatch(
        getAdminList({
          page: 1,
          limit: 5,
          search: search,
        })
      );
    }
  }, [search]);
  useEffect(() => {
    dispatch(changeAdminActivePage(0));
    dispatch(
      getAdminList({
        page: 1,
        limit: 5,
        search: "",
      })
    );
  }, []);
  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <BasicBox>
          <BasicBox
            component="h2"
            sx={{
              color: "text.primary",
              fontWeight: Fonts.BOLD,
              mb: 6,
              fontSize: 22,
              display: "inline-block",
            }}
          >
           <IntlMessages id="Admin.mainHeading" />
           {/*  <Link href="/adminManagement/addAdmin">
              <AppGridContainer>
                <Grid item xs={12} md={9}>
                  <BasicBox
                    id={postId}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    sx={{
                      position: "absolute",
                      right: 4,
                      top: 4,
                      color: "gray",
                    }}
                  >
                    <Button variant="contained" color="primary">
                      <IntlMessages id="common.addAdmin" />
                    </Button>
                  </BasicBox>
                </Grid>`
              </AppGridContainer>
            </Link>  */}
          </BasicBox>
          <AppGridContainer>
            <Grid item xs={12} md={12}>
              <AppCard
                contentStyle={{ px: 0 }}

              >
                <TableContainer>
                  <Grid item lg={3} sm={6} xs={9} mb={6} ml={2}>
                    <TextField
                      sx={{ ml: 2, mt: 2, }}
                      className="textFieldDesign"
                      fullWidth
                      placeholder="Search Text"
                      label="Search"
                      value={search}
                      onChange={(event: any) => {
                        setSearch(event.target.value);
                      }}
                    />
                  </Grid>
                </TableContainer>
                {
                  adminList && adminList?.admin?.admins?.length > 0 ? (
                    <PlayerTable
                      playerTableData={
                        adminList && adminList.admin
                      }
                    />
                  ) : <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={images} alt={""} />
                  </div>}
              </AppCard>
            </Grid>
          </AppGridContainer>
        </BasicBox>
      </AppAnimate>
    </>
  );
};

export default Admin;
