import React from "react";
import TableCell from "@mui/material/TableCell";
import IntlMessages from "@crema/utility/IntlMessages";
import TableRow from "@mui/material/TableRow";
import { Fonts } from "../../../shared/constants/AppEnums";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };
const TableHeading = () => {
  return (
    <TableRow
      sx={{
        "& th": {
          fontSize: 13,
          padding: 2,
          fontWeight: Fonts.BOLD,
          "&:first-of-type": {
            pl: 5,
          },
          "&:last-of-type": {
            pr: 5,
          },
        },
      }}
    >
      <TableCell align="center" className="tableCell">
        <IntlMessages id="users.table.firstName" />
      </TableCell>
      <TableCell align="center" className="tableCell">
        <IntlMessages id="users.table.lastName" />
      </TableCell>
      <TableCell align="center" className="tableCell">
        <IntlMessages id="users.table.phone #" />
      </TableCell>
      <TableCell align="center" className="tableCell">
        <IntlMessages id="users.table.Status" />
      </TableCell>
      <TableCell align="center" className="tableCell">
        <IntlMessages id="users.table.Action" />
      </TableCell>
    </TableRow>
  );
};

export default TableHeading;
