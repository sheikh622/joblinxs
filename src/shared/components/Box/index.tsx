import Box from "@mui/material/Box";
import React, { FC } from "react";



interface BoxProp {
  className?: string;
  component?: any;
  sx?: any;
  display?:any;
  flexDirection?:any;
  alignItems?:any;
  id?:any;
}
const BasicBox: FC<BoxProp> = ({ children, component, sx, id,  display, flexDirection,alignItems,}) => {
  return (
    <Box component={component} sx={sx} display={display} flexDirection={flexDirection} alignItems={alignItems} id={id}>
      {children}

       {/* <Button variant="contained" color="primary">
                      <IntlMessages id="common.addAdmin" />
                    </Button> */}
    </Box>
  );
};
export default BasicBox;
