import React from "react";
import TableCell from "@mui/material/TableCell";
import IntlMessages from "@crema/utility/IntlMessages";
import TableRow from "@mui/material/TableRow";
import { Fonts } from "../../../shared/constants/AppEnums";
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Table = () => {
  return (
    <TableRow
      sx={{
        "& th": {
          fontSize: 15,
          padding: 4,
          bgcolor: "white",

          //   alignItems:"center",
          //   justifyContent:"center", 
          fontWeight: Fonts.BOLD,

          "&:first-of-type": {
            pl: 10,
          },
          "&:last-of-type": {
            pr: 10,
          },
        },
      }}
    >
      <TableCell align="center" className="tableCell">
        <IntlMessages id="Notification.table.UserName" />
      </TableCell>
      <TableCell align="center" className="tableCell">
        <IntlMessages id="Notification.table.Service" />
      </TableCell>

      <TableCell align="center" className="tableCell">
        <IntlMessages id="Notification.table.Action" />
      </TableCell>
    </TableRow>
  );
};

export default Table;
