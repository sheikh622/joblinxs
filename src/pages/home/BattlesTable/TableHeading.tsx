import React from "react";
import TableCell from "@mui/material/TableCell";
import IntlMessages from "@crema/utility/IntlMessages";
import TableRow from "@mui/material/TableRow";
import { Fonts } from "../../../shared/constants/AppEnums";

const TableHeading = () => {
  return (
    <TableRow
      sx={{
        borderBottom: "0 none",
        "& .tableCell": {
          borderBottom: "0 none",
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
        {/* <IntlMessages id="common.num" /> */}Id
      </TableCell>
      <TableCell align="center" className="tableCell">
        {/* <IntlMessages id="common.name" /> */}Collection
      </TableCell>
      <TableCell align="center" className="tableCell">
        {/* <IntlMessages id="dashboard.marketCap" /> */}Start
      </TableCell>
      <TableCell align="center" className="tableCell">
        {/* <IntlMessages id="dashboard.volume24h" /> */}End
      </TableCell>
      <TableCell align="center" className="tableCell">
        {/* <IntlMessages id="dashboard.24h" /> % */}Registered
      </TableCell>
    </TableRow>
  );
};

export default TableHeading;
