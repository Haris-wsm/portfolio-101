import React from "react";
import "./Item.css"

const Item = (props) => {
  return (
    <div className="item-container" onClick={props.openLink}>
      <h1>{props.name}</h1>
      <p>{props.name}</p>
      <div className="tags-wrapper">
        {props.tool.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Item;
