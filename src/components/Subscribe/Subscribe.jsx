import React from "react";
import {
  Box,
  Typography,
  Divider,
  InputBase,
  IconButton,
  Icon,
} from "@mui/material";
import MarkEmailReadOutlined from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlined fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe to our Newsletter</Typography>
      <Typography>and receive $20 coupon for your first order</Typography>
      <Box
        padding="2px 4px"
        margin="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ marginLeft: 1, width: "80%" }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 20, margin: 0.5 }} orientation="vertical" />
        <Typography
          sx={{
            padding: "10px",
            width: "20%",
            ":hover": {
              cursor: "pointer",

              transition: "0.2s ease-in",
              backgroundColor: "black",
              color: "#f2f2f2",
            },
          }}
        >
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
