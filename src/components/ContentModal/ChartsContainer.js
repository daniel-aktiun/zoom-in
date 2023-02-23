import Box from "@mui/material/Box";
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

const ChartsContainer = () => {
  return (
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
  );
};

export default ChartsContainer;
