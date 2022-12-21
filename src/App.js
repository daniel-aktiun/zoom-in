import "./App.css";
import Button from "@mui/material/Button";
import AppModal from "./components/AppModal";
import { useState } from "react";
import ChartsContainer from "./components/ContentModal/ChartsContainer";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Show Population
      </Button>
      <AppModal open={open} handleClose={handleClose}>
        <ChartsContainer />
      </AppModal>
    </div>
  );
}

export default App;
