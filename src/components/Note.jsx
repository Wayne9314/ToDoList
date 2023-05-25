import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function NotePara(props) {

  const [isCross, setLine] = useState(false);

  function cross() {
    !isCross ? setLine(true) : setLine(false);
  }
  return (
      <p className="note-p"
        onClick={cross}
        style={{ textDecoration: isCross ? "line-through" : "" }}
      >
        {props.p}
      </p>
  );
}

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      {props.content}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export {Note, NotePara};