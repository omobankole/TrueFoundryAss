import classes from "./bar.module.css";
import Earth from "../../../asset/images/earth-green.svg";

const Bar = () => {
  return (
    <div className={classes.main}>
      <div>
        <img src={Earth} alt="" />
        <p>
          This board is set to public. Board admins can change its visibility
          setting at any time.
        </p>
        <a href="#">Learn more here</a>
      </div>
      <button>&#10005;</button>
    </div>
  );
};

export default Bar;
