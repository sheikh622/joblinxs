import React from "react";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PageviewIcon from "@mui/icons-material/Pageview";
import TableRow from "@mui/material/TableRow";
import { green, red } from "@mui/material/colors";
import { Fonts } from "../../../shared/constants/AppEnums";
import { BattleTableData } from "types/models/Home";

interface TableItemProps {
  row: BattleTableData;
}

const TableItem: React.FC<TableItemProps> = ({ row }) => {
  return (
    <TableRow
      sx={{
        borderBottom: "0 none",
        "& .tableCell": {
          borderBottom: "0 none",
          fontSize: 13,
          padding: 2,
          "&:first-of-type": {
            pl: 5,
          },
          "&:last-of-type": {
            pr: 5,
          },
        },
      }}
      className="item-hover"
    >
      <TableCell align="center" className="tableCell">
      {row.id}
      </TableCell>
      <TableCell align="center" className="tableCell">
      {row.collection}
      </TableCell>
      <TableCell align="center" className="tableCell">
      {row.start}
      </TableCell>
      <TableCell align="center" className="tableCell">
        {row.end}
      </TableCell>
      <TableCell align="center" className="tableCell">
        {row.registered}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
