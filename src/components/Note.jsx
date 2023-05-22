import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const [isCross, setLine] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function cross() {
    !isCross ? setLine(true) : setLine(false);
  }

  return (
    <div className="note">
      <h1
        onClick={cross}
        style={{ textDecoration: isCross ? "line-through" : "" }}
      >
        {props.title}
      </h1>
      <p
        onClick={cross}
        style={{ textDecoration: isCross ? "line-through" : "" }}
      >
        {props.content}
      </p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
