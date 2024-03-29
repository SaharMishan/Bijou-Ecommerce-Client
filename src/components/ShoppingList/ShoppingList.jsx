import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/cartSlice";
const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const getItems = async () => {
    const response = await fetch(
      // "http://localhost:1337/api/items?populate=image",
      "https://bijou.onrender.com/api/items?populate=image",
      { method: "GET" }
    );
    const items = await response.json();
    console.log(items);
    dispatch(setItems(items.data));
  };

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellerItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        sx={{
          margin: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
      >
        <Tab label="ALL" value="all"></Tab>
        <Tab label="NEW ARRIVALS" value="newArrivals"></Tab>
        <Tab label="BEST SELLERS" value="bestSellers"></Tab>
        <Tab label="TOP RATED" value="topRated"></Tab>
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill,300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellerItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
