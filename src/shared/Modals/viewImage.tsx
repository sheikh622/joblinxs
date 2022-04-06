import { Box, Grid, TextField, Link } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { FC } from "react";
import Button from "@mui/material/Button";
import IntlMessages from "@crema/utility/IntlMessages";
import pic9 from "../../assets/images/pic9.jpg";
interface FuncProp {
  className?: string;
  show?: any;
  onHide: () => void;
  Header?: any;
  size?: any;
  scrollable?: any;
  width?: number;
}
const BasicModal: FC<FuncProp> = ({
  show,
  onHide,
  children,
  width,
  className,
  Header,
  size,
  scrollable,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {lg:width,xs:400},
    bgcolor: "background.paper",
    border: "2px solid gray",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  return (
   
     <Modal
        open={show}
        onClose={onHide}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        // sx={{ bgcolor: "white" }}
      >
          <Grid item xs={12}>
        <Box>
          <Box
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { lg: 380, xs: 380 },
              bgcolor: "white",
              border: "2px solid gray",
              borderRadius: "10px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <img
            className="img-fuild" 
            src={pic9} 
            alt="" 
            />
            <Box
            display=""
            sx={{
              padding: 2,
              ml:65,
            }}
          >
            <Button variant="contained" onClick={onHide}>
            <IntlMessages id="common.close" />
            </Button>
          </Box>
          </Box>
         
        </Box>
        </Grid>
      </Modal>
  );
};
export default BasicModal;
