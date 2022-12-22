import Box from "@mui/material/Box";
import { createRef, useState } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
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
  const ref = createRef(null);
  const [, takeScreenshot] = useScreenshot();
  const [zoom, setZoom] = useState(INITIAL_STATE);

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

  return (
    <>
      <Controls
        zoom={zoom}
        setZoom={setZoom}
        downloadScreenshot={downloadScreenshot}
      />
      <Box sx={style} style={{ zoom: `${zoom}%` }}>
        <div ref={ref} style={{ padding: "1rem" }}>
          <Chart fullScreen={true} />
        </div>
      </Box>
    </>
  );
};

export default FullScreen;
