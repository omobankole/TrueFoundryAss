import classes from "./nav.module.css";
import { navData } from "../../../constant/navData";
import Arrow from "../../../asset/images/arrow-down.png";

const Nav = () => {
  return (
    <>
      <ul className={classes.main}>
        {navData.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <img src={Arrow} alt="" />
          </li>
        ))}
        <button>Create</button>
      </ul>
    </>
  );
};

export default Nav;
