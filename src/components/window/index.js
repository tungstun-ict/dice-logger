import { useRef, useState } from "react";
import Draggable from "react-draggable";
import "./window.css"

function Window(props) {
  const nodeRef = useRef(null);
  const [selected, setSelected] = useState(0);
  
  const handleClick = () => {
    console.log(`selected: ` + props.name)
    setSelected(selected + 1)
  }
  
  return (
    <Draggable nodeRef={nodeRef} bounds="parent" handle=".window__header">
      <div ref={nodeRef} className="window" style={{zIndex: selected}} onClick={handleClick}>
        <div className="window__header">
          <h2 className="window__title">{props.name}</h2>
          <div className="window__close"></div>
        </div>
        <p>{selected}</p>
      </div>
    </Draggable>
  );
}

export default Window;
