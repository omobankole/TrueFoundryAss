import classes from "./barTwo.module.css";
import Earth from "../../../asset/images/earth-white.svg";

const BarTwo = () => {
  return (
    <div className={classes.main}>
      <h3>Kanban Board</h3>
      <div className={classes.star}>
        <p>&#9734;</p>
      </div>
      <span className={classes.line}></span>
      <div className={classes.public}>
        <img src={Earth} alt="" />
        <p>Public</p>
      </div>
      <span className={classes.line}></span>
      <button className={classes.avatarTwo}>AH</button>
    </div>
  );
};

export default BarTwo;
