import classes from "./input.module.css";
import Search from "../../asset/images/search.png";

const Input = () => {
  return (
    <form className={classes.main}>
      <label htmlFor="input">
          <img src={Search} alt="" />
        <input type="search" placeholder="Search" id="input"/>
      </label>
    </form>
  );
};

export default Input;
