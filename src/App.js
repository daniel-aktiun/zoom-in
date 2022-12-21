import "./App.css";
import Button from "@mui/material/Button";
import AppModal from "./components/AppModal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Show Population
      </Button>
      <AppModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
