import Draggable from "react-draggable";
import "./window.css"

function Window(props) {
  return (
    <Draggable bounds="parent" handle=".window__header">
      <div className="window">
        <div className="window__header">
          <h2 className="window__title">{props.name}</h2>
          <div className="window__close"></div>
        </div>
        <p>Content</p>
      </div>
    </Draggable>
  );
}

export default Window;
