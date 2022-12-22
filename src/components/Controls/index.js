import "./styles.css";

const ADD_ZOOM = 5;
const INITIAL_ZOOM = 100;

const Controls = ({ setZoom, zoom, downloadScreenshot }) => {
  const zoomIn = () => {
    setZoom(zoom + ADD_ZOOM);
  };

  const zoomOut = () => {
    setZoom(zoom - ADD_ZOOM);
  };

  const reset = () => {
    setZoom(INITIAL_ZOOM);
  };

  return (
    <div className="controls">
      <button onClick={zoomIn}>zoom in</button>
      <button onClick={reset}>reset</button>
      <button onClick={zoomOut}>zoom out</button>
      <button onClick={downloadScreenshot}>download image</button>
    </div>
  );
};

export default Controls;
