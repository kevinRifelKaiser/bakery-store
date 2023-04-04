import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, AppBar, Toolbar, Button, IconButton, Icon } from "@mui/material";
import { useState } from "react";

const NavBar = () => {
  const [isLogedIn, setLogedIn] = useState(false);

  const onHandleLogin = () => {
    setLogedIn(!isLogedIn);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}>
        <Toolbar
          sx={{
            justifyContent: "flex-end",
          }}>
          <IconButton>
            <Link to="/">{<HomeOutlinedIcon />}</Link>
          </IconButton>
          <IconButton>
            <Link to="/cart">{<ShoppingCartOutlinedIcon />}</Link>
          </IconButton>
          {isLogedIn ? (
            <IconButton onClick={onHandleLogin}>
              <AccountCircleOutlinedIcon />
            </IconButton>
          ) : (
            <Button
              sx={{
                color: "black",
              }}
              color="inherit"
              onClick={onHandleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
