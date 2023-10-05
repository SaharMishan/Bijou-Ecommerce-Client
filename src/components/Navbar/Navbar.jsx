import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cartSlice";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const onSetIsCartOpen = () => {
    dispatch(setIsCartOpen({}));
  };
  return (
    <Box className={classes.navbar}>
      <Box className={classes.container}>
        <Box
          fontSize="30px"
          fontWeight="200"
          color={shades.secondary[500]}
          className={classes.logo}
          onClick={() => navigate("/")}
        >
          B I J O U
        </Box>
        <Box className={classes.icons}>
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            className={classes.badge}
            color="secondary"
            invisible={cart.length === 0}
            badgeContent={cart.length}
            sx={{
              "@ .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton onClick={onSetIsCartOpen} sx={{ color: "black" }}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
