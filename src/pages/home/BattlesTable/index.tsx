import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/core/AppTableContainer";
import { BattleTableData } from "types/models/Home";

interface  BattleTableProps {
  battleData: BattleTableData[];
}

const BattleTable: React.FC< BattleTableProps> = ({
  battleData,
}) => {
  return (
    <AppTableContainer>
      <Table>
        <TableHead
          sx={{
            borderBottom: "0 none",
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody>
          {battleData.map((row) => (
            <TableItem key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default BattleTable;
