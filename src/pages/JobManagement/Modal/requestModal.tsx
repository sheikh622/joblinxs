import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { FC } from "react";
import Button from "@mui/material/Button";
import IntlMessages from "@crema/utility/IntlMessages";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux"
import TableContainer from "@mui/material/TableContainer";
import { Grid, TableBody, TextField, Card } from "@mui/material";
import Table from "./tableItem";
// import TableHeading from "pages/Users/LeaderBoardTable/TableHeading";
import TableHead from "@mui/material/TableHead";
// import TableBody from "@mui/material/TableBody";
interface FuncProp {
  className?: string;
  show?: any;
  onHide?: any;
  onDelete?: any;
  Header?: any;
  size?: any;
  scrollable?: any;
  width?: number;
  id?: any;
  page?: any;
  search?: any;
  UserName?: any;
  Service?: any;
  Action?: any;
}

const BasicModal: FC<FuncProp> = ({
  show,
  onHide,
  onDelete,
  UserName, Service, Action
}) => {
  const style = {
    // position: "absolute" as "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // width: { lg: width, xs: 400 },
    // bgcolor: "white",
    // border: "2px solid gray",
    // borderRadius: "10px",
    // boxShadow: 24,
    // p: 4,
  };
  const dispatch = useDispatch()
  return (
    <div>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          padding: 15,
          mt: 25,
          marginLeft: 135,
          p: 4,
        }}
      >
        <Grid item lg={6} sm={6} xs={9} mb={6} ml={2} >
          <TableContainer >
            <Box>
              <Box
                component="h2"
                sx={{
                  color: "text.primary",
                  // fontWeight: Fonts.BOLD,  
                  mb: 6,
                  fontSize: 22,
                  display: { lg: "inline-block", xs: "block" },
                  mt: 20,

                }}
              >
              </Box>
              <Grid item xs={12}
              >

                <Card sx={{ width: 364, paddingTop: 11 }}>
                  <TableHead>
                    <Table />
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        bgcolor: "white",
                        width: "100%",
                        mt: 10,
                      }}

                    >
                      <TableCell align="center" className="tableCell">
                        {UserName ? UserName : "Sunny"}
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        {Service ? Service : "092345678"}
                      </TableCell>
                      <TableCell align="center" className="tableCell">
                        {Action ? Action : "098"}
                      </TableCell>

                    </TableRow>

                  </TableBody>
                  <Box sx={{ mt: 10 }}>
                    <Button variant="contained" onClick={onHide} sx={{ ml: 70, mb: 5 }}>
                      <IntlMessages id="common.close" ></IntlMessages></Button>
                  </Box>
                </Card>


              </Grid>
            </Box>

          </TableContainer>
        </Grid>
      </Modal>
    </div>
  );
};
export default BasicModal;
