import classes from "./dragCard.module.css";
import { Draggable } from "react-beautiful-dnd";

import React from "react";

const DragCard = ({ item, index }) => {
  return (
    <Draggable
      draggableId={`${index}`}
      index={index}
      key={`${item}`}
    >
      {(provided, snapshot) => {
        return (
          <div
            className={classes.main}
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={classes.lineColor}></div>
            <h3>{item}</h3>
          </div>
        );
      }}
    </Draggable>
  );
};

export default DragCard;
