import classes from "./drag.module.css";
import Dragboard from "./DragBoard/dragBoard";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";

const Drag = () => {
  const [array, setArray] = useState([
    {
      title: "To-do",
      list: ["Helpdesk Call AA999", "Helpdesk Call BB999"],
    },
    {
      title: "Development",
      list: ["Helpdesk Call CC999", "Helpdesk Call EE999"],
    },
    {
      title: "Testing",
      list: ["Helpdesk Call DD999"],
    },
    {
      title: "Done",
      list: ["Helpdesk Call GG999", "Helpdesk Call FF999"],
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    console.log(result);
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      let sourceItem = array.find((o) => o.title === source.droppableId);
      let destItem = array.find((o) => o.title === source.droppableId);
      const sourceArray = array[sourceItem];
      const destArray = array[destItem];
      const sourceItems = [...sourceArray.list];
      const destItems = [...destArray.list];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setArray({
        ...array,
        [source.droppableId]: {
          ...sourceArray,
          list: sourceItems,
        },
        [destination.droppableId]: {
          ...destArray,
          list: destItems,
        },
      });
    } else {
      let sourceItem = array.find((o) => o.title === source.droppableId);
      console.log(sourceItem);
      console.log(array.indexOf(sourceItem));
      let destItem = array.find((o) => o.title === source.droppableId);
      // const column = array[sourceItem];
      // console.log(column);
      const copiedItems = [...sourceItem.list];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      console.log(copiedItems);
      sourceItem.list = copiedItems;
      // setArray(copiedItems);
      //   setArray({
      //     ...array,
      //     [source.droppableId]: {
      //       ...sourceItem,
      //       list: copiedItems,
      //     },
      //   });
    }
  };

  const [form, setForm] = useState(false);
  return (
    <div className={classes.main}>
      <DragDropContext onDragEnd={onDragEnd}>
        {array.map((item, index) => (
          <Dragboard title={item.title} array={item.list} key={index} />
        ))}
      </DragDropContext>
      {form ? (
        <form
        className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            setArray([
              ...array,
              {
                title: e.target.input.value,
                list: [],
              },
            ]);
            e.target.input.value = "";
            setForm(false);
          }}
        >
          <input
            type="text"
            name="input"
            placeholder="Enter a title for this card..."
          />
          <div className={classes.typeCard}>
            <button className={classes.addTwo}>Add card</button>
            <button className={classes.close} onClick={()=>setForm(false)}>
              &#10005;
            </button>
          </div>
        </form>
      ) : (
        <div className={classes.addCard}>
          <button onClick={() => setForm(true)}>
            <span>+</span>
            Add another list
          </button>
        </div>
      )}
    </div>
  );
};

export default Drag;
