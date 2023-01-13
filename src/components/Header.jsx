import { Typography, Box } from "@mui/material";

function Header({ title, subtitle }) {

  return (
    <Box mb="30px">
      <Typography
        variant="h5"
        color="primary_text.main"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h7" color="primary.main">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
