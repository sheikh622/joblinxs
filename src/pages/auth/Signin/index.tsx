import React from "react";
import Box from "@mui/material/Box";
import AuthWrapper from "../AuthWrapper";
import LoginPage from "./Login";
import AppLogo from "@crema/core/AppLayout/components/AppLogo";
import { useHistory, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Fonts } from "../../../shared/constants/AppEnums";
import IntlMessages from "@crema/utility/IntlMessages";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { BiLeftArrow } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Checkbox } from "@mui/material";
const Signin = () => {
  const history = useHistory();
  return (
    <AuthWrapper>
      <Box sx={{ width: "70%" }}>
        {/* <Box sx={{ mb: { xs: 6, xl: 8 } }}> */}
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontWeight: Fonts.BOLD,
                fontSize: 15,
                alignItems: "center",
                justifyContent: "center",
                justifySelf: "center",
                paddingTop: 1,
              }}
            >
              <IntlMessages id="common.logintitle" />
            </Typography>
          {/* </Box> */}
        </Box>
        <LoginPage />
      </Box>
    </AuthWrapper>
  );
};
export default Signin;
