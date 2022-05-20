import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import images from "../../../assets/images/noData.png";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
interface PlayerTableProps {
  userTableData: any;
  page: any;
  setPage: any;
  limit: any;
  setLimit: any;
  search: any;
  setSearch: any;
  usertype: any;
  adminId: any;
  setAdminId: any;
}
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
const PlayerTable: React.FC<PlayerTableProps> = ({
  userTableData,
  page,
  setPage,
  limit,
  setLimit,
  search,
  setSearch,
  adminId,
  setAdminId,
  usertype,
}) => {
  const dispatch = useDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value, 10));
  };
  const { messages } = useIntl();
  return (
    <>
      <TableContainer>
        <Grid item xs={12} style={{ padding: 20 }}></Grid>
        <Table>
          <TableHead>
            <TableHeading />
          </TableHead>

          {userTableData?.users?.length > 0 &&
            userTableData?.users.map((row: any) => (
              <>
                <TableBody>
                  <TableItem
                    key={row.id}
                    row={row}
                    page={page}
                    limit={limit}
                    adminId={adminId}
                    setAdminId={setAdminId}
                    type={usertype}
                    search={search}
                  />
                </TableBody>
              </>
            ))}
        </Table>
      </TableContainer>
      {userTableData?.users?.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          colSpan={7}
          count={userTableData?.totalUsers}
          rowsPerPage={limit}
          page={page}
          sx={{
            marginLeft: "auto",
            width: "100%",
            borderBottom: "0 none",
            marginBottom: 0,
            paddingBottom: 0,
          }}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}

      {userTableData?.users?.length == 0 && (
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <img src={images} alt={""} />
        </div>
      )}
    </>
  );
};

export default PlayerTable;
