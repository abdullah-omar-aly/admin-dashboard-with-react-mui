import { Typography, Box, useTheme } from "@mui/material";

function Header({ title, subtitle }) {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
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
