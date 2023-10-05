import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  return (
    <Box mt="70px" p="40px 0" backgroundColor={shades.neutral[100]}>
      <Box
        width="80%"
        margin="auto "
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap=" clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%,30%,40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            BIJOU
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quasi est incidunt porro similique a voluptatem repudiandae nostrum
            ut earum, laudantium numquam eum esse debitis necessitatibus ducimus
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Term & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Coporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">Ramat-Gan,Hamerkaz,Israel </Typography>
          <Typography mb="30px">Email: Bijou@gmail.com</Typography>
          <Typography mb="30px">+972 509999999</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
