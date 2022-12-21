import Modal from "@mui/material/Modal";
import "./styles.css";
// import Controls from "../Controls";
// import { useState } from "react";

const AppModal = ({ open, handleClose, children }) => {
  // const [zoom, setZoom] = useState(100);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {/* <Controls setZoom={setZoom} zoom={zoom} /> */}
        {/* <Box sx={style} style={{ zoom: `${zoom}%` }}> */}
        {children}
      </>
    </Modal>
  );
};

export default AppModal;
