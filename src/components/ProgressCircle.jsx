import { Box, useTheme } from "@mui/material";

function ProgressCircle({ progress = "0.75", size = "40" }) {
    const { palette } = useTheme();
    const angle = progress * 360;
    return (
        <Box
            sx={{
                background: `radial-gradient(transparent 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${palette.secondary.main} ${angle}deg 360deg),
            ${palette.primary.main}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default ProgressCircle;
