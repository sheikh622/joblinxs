import React from "react";
import orange from "@mui/material/colors/orange";
import { useAuthMethod, useAuthUser } from "../../../../utility/AuthHooks";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Fonts } from "../../../../../shared/constants/AppEnums";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import AppTooltip from "../../../AppTooltip";
import { alpha, Box } from "@mui/material";

interface UserInfoProps {
  color?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ color = "text.secondary" }) => {
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };

  return (
    <>
      {/* <Box
        onClick={handleClick}
        sx={{
          py: 3,
          px: 3,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        className="user-info-view"
      >
        <Box sx={{ py: 0.5 }}>
          {user.photoURL ? (
            <Avatar
              sx={{
                height: 40,
                width: 40,
                fontSize: 24,
                backgroundColor: orange[500],
              }}
              src={user.photoURL}
            />
          ) : (
            <Avatar
              sx={{
                height: 40,
                width: 40,
                fontSize: 24,
                backgroundColor: orange[500],
              }}
            >
              {getUserAvatar()}
            </Avatar>
          )}
        </Box>
        <Box
          sx={{
            width: { xs: "calc(100% - 62px)", xl: "calc(100% - 72px)" },
            ml: 4,
            color: color,
          }}
          className="user-info"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                mb: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: 16,
                fontWeight: Fonts.MEDIUM,
                color: "inherit",
              }}
              component="span"
            >
              {user.displayName ? user.displayName : "Admin User "}
            </Box>
            <IconButton
              style={{ height: 30, width: 30 }}
              aria-label="more"
              onClick={handleClick}
              size="large"
            >
              <LogoutIcon />
            </IconButton>
            <Box
              sx={{
                ml: 3,
                color: "inherit",
                display: "flex",
              }}
            >
              <ExpandMoreIcon />
            </Box>
          </Box>
          <Box
            sx={{
              mt: -0.5,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "inherit",
            }}
          >
            System Manager
          </Box>
        </Box>
      </Box> */}
      <div style={{ textAlign:'end' }}>
        <AppTooltip title="Logout" placement="bottom">
          <IconButton
            sx={{
              height: 40,
              width: 40,
              borderRadius: "50%",
              padding: "6px 9px",
              color: (theme) => theme.palette.text.secondary,
              backgroundColor: (theme) => theme.palette.background.default,
              border: 1,
              borderColor: "transparent",
              "&:hover, &:focus": {
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) =>
                  alpha(theme.palette.background.default, 0.9),
                borderColor: (theme) =>
                  alpha(theme.palette.text.secondary, 0.25),
              },
              "& .langText": {
                ml: 2.5,
                fontSize: 16,
                fontWeight: Fonts.REGULAR,
                display: { xs: "none", sm: "inline-block" },
              },
              "& svg": {
                fontSize: 20,
              },
            }}
            className="lang-switcher-btn"
            aria-label="account of current user"
            aria-controls="language-switcher"
            aria-haspopup="true"
            onClick={logout}
            color="inherit"
            size="large"
          >
            <LogoutIcon />
          </IconButton>
        </AppTooltip>
      </div>

      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/my-account");
          }}
        >
          My account
        </MenuItem>
        <MenuItem style={{paddingLeft:'50px',paddingRight:'50px'}}onClick={logout}>Logout</MenuItem>
      </Menu> */}
    </>
  );
};

export default UserInfo;
