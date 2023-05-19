import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,

  backgroundColor: "#4b37656e",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#F3BA2F" : "#308fe8",
  },
}));

export default function ProgressBar(props: any) {
  console.log(props);
  return (
    <Box>
      <BorderLinearProgress
        sx={{
          marginTop: "75px",
          width: "200px",
          height: "10px",
          marginLeft: "25px",
        }}
        variant="determinate"
        value={props.pValue}
      />
    </Box>
  );
}
