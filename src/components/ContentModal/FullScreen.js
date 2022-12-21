import Box from "@mui/material/Box";
import { useState } from "react";
import Chart from "../Chart";
import Controls from "../Controls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const INITIAL_STATE = 100;

const FullScreen = () => {
  const [zoom, setZoom] = useState(INITIAL_STATE);

  return (
    <>
      <Controls zoom={zoom} setZoom={setZoom} />
      <Box sx={style} style={{ zoom: `${zoom}%` }}>
        <Chart fullScreen={true} />
      </Box>
    </>
  );
};

export default FullScreen;
