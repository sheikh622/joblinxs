import React from "react";
import Button from "@mui/material/Button";
import IntlMessages from "@crema/utility/IntlMessages";
import Box from "@mui/material/Box";
import { Fonts } from "../../constants/AppEnums";
import AppCard from "@crema/core/AppCard";
import { useIntl } from "react-intl";
import Image from "../../../assets/images/backGround.jpg";
import { Typography } from "@mui/material";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{
        height: 1,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        color: "white",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        },
        "& > *": {
          position: "relative",
          zIndex: 3,
        },
      }}
     
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "70%", xl: "50%" },
          height: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="p"
          sx={{
            fontSize: 22,
          }}
        >
          <IntlMessages id="dashboard.homeContent" />
        </Box>

        <Box
         component="p"
         sx={{
           pt:5,
           fontSize: 22,
           width:300,
         }}
        >
          <Typography>
              NFT battle game tool is a play-to-earn system that works on the
              Ethereum Blockchain network. Holders who own NFTs registered to
              this game tool could play this game and earn ERC20 tokens.
            </Typography>
         
        </Box>
      </Box>
    </AppCard>
  );
};

export default Header;
