import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./styles.css";
import Chart from "../Chart";

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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
    </Modal>
  );
};

export default AppModal;
