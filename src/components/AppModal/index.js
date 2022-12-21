import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./styles.css";
import Chart from "../Chart";
import Controls from "../Controls";
import { useState } from "react";

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

const AppModal = ({ open, handleClose }) => {
  const [zoom, setZoom] = useState(100);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Controls setZoom={setZoom} zoom={zoom} />
        <Box sx={style} style={{ zoom: `${zoom}%` }}>
          <h3>Modal</h3>
          <div className="modal-container">
            <div>
              <Chart />
            </div>
            <div>
              <Chart />
            </div>
            <div>
              <Chart />
            </div>
          </div>
        </Box>
      </>
    </Modal>
  );
};

export default AppModal;
