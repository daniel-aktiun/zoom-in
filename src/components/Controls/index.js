import "./styles.css";

const ADD_ZOOM = 25;
const INITIAL_ZOOM = 100;

const Controls = ({ setZoom, zoom }) => {
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
    </div>
  );
};

export default Controls;
