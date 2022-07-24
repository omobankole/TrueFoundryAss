import classes from "./dots.module.css";
import Dot from "../../../asset/images/dots.svg";

const Dots = () => {
  return (
    <button className={classes.main}>
      <img src={Dot} alt="dot" />
    </button>
  );
};

export default Dots;
