import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Fonts } from "../../shared/constants/AppEnums";
import IntlMessages from "@crema/utility/IntlMessages";
interface AuthWrapperProps {
  children: any;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <Card sx={{width:"30%",
    flex: 1,
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center" ,
     
    }}>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {/* <Box
          sx={{
            width: { xs: "100%", sm: "50%", lg: "40%" },
            padding: { xs: 5, lg: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        > */}
          {children}
        </Box>
        {/* <Box
          sx={{
            width: { xs: "100%", sm: "50%", lg: "60%" },
            position: "relative",
            padding: { xs: 5, lg: 10 },
            display: { xs: "none", sm: "flex" },
            alignItems: { sm: "center" },
            justifyContent: { sm: "center" },
            flexDirection: { sm: "column" },
            backgroundColor: (theme) => theme.palette.grey[900],
            color: (theme) => theme.palette.common.white,
            fontSize: 14,
          }}
        >
          <Box
            sx={{
              maxWidth: 320,
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontWeight: Fonts.BOLD,
                fontSize: 30,
                mb: 4,
              }}
            >
             <IntlMessages id="common.Welcome" />
            </Typography>
            <Typography>
            <IntlMessages id="common.Description" />
            </Typography>
          </Box>
        </Box> */}
      {/* </Card> */}
     {/* </Box>  */}
    </Card>
  );
};

export default AuthWrapper;
