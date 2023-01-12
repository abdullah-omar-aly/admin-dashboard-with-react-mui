import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "./ProgressCircle";

function StatBox ({ title, subtitle, icon, progress, increase })  {

  return (
    <Box width="100%"  bgcolor="primary_bg.main" p="1rem" borderRadius="0.5rem" height="100%">
      <Box display="flex" justifyContent="space-between" >
        <Box>
          {icon}
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "secondary_text.main" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h6" sx={{ color: "secondary_text.main" }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h7"
          fontStyle="italic"
          sx={{ color: "primary.dark" }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
