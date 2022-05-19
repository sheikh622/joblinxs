import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { FC } from "react";
import Button from "@mui/material/Button";
import IntlMessages from "@crema/utility/IntlMessages";
import { useDispatch, useSelector } from "react-redux"
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
  
}
const BasicModal: FC<FuncProp> = ({
  show,
  onHide,
  onDelete,
  children,
  width,
  className,
  Header,
  size,
  scrollable,
  id,
  page,
  search,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { lg: width, xs: 400 },
    bgcolor: "background.paper",
    border: "2px solid gray",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const dispatch = useDispatch()
  return (
    <div>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: { lg: 400, xs: 400 },
            bgcolor: "white",
            border: "2px solid gray",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        
        >
          <Box sx={{ p: 4, color: "blue" }}>
            <IntlMessages id="delAdmin.deleteAdmin" />
          </Box>
          <Box display="flex" sx={{ padding: 1, ml: 40, p: 4 }}>
            <Button variant="contained"
              onClick={() => {
                onHide()
                onDelete()
              }}
            >
              <IntlMessages id="common.delete" />
            </Button>
            <Button variant="contained" onClick={onHide} sx={{ ml: 4 }}>
              <IntlMessages id="common.cancel" />
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
