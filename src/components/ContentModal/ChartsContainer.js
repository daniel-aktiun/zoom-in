import Box from "@mui/material/Box";
import { useState } from "react";
import AppModal from "../AppModal";
import Chart from "../Chart";
import FullScreen from "./FullScreen";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ChartsContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={style}>
      <h3>Modal</h3>
      <div className="modal-container">
        <div>
          <button onClick={handleOpen} className="modal-container__button">
            ▣
          </button>
          <Chart />
        </div>
        <div>
          <button onClick={handleOpen} className="modal-container__button">
            ▣
          </button>
          <Chart />
        </div>
        <div>
          <button onClick={handleOpen} className="modal-container__button">
            ▣
          </button>
          <Chart />
        </div>
      </div>
      <AppModal open={open} handleClose={handleClose}>
        <FullScreen />
      </AppModal>
    </Box>
  );
};

export default ChartsContainer;
