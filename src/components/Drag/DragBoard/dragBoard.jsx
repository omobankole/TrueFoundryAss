import DragCard from "../DragCard/dragCard";
import classes from "./dragBoard.module.css";
import { useMemo, useState } from "react";
import { Droppable } from "react-beautiful-dnd";

const Dragboard = ({ title, array }) => {
  const [show, setShow] = useState(false);
  const list = useMemo(() => {
    console.log(array);
    console.log("changed");
    const newArray = [...array];
    return newArray;
  }, [array.length]);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className={classes.main}>
      <div className={classes.boardTitle}>
        <h3>{title}</h3>
        <span>•••</span>
      </div>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <DragCard item={item} index={index} key={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {show ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(array);
            array.push(e.target.input.value);
            // setArray([...array, e.target.input.value]);
            e.target.input.value = "";
            setShow(false);
          }}
        >
          <input
            type="text"
            name="input"
            placeholder="Enter a title for this card..."
          />
          <div className={classes.typeCard}>
            <button className={classes.addTwo}>Add card</button>
            <button className={classes.close} onClick={() => setShow(false)}>
              &#10005;
            </button>
          </div>
        </form>
      ) : (
        <button className={classes.addCard} onClick={handleShow}>
          <span>+</span>
          Add a card
        </button>
      )}
    </div>
  );
};

export default Dragboard;
