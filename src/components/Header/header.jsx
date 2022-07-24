import Input from "../input/input";
import Dots from "./Dots/dots";
import classes from "./header.module.css";
import Logo from "./Logo/logo";
import Nav from "./Nav/nav";
import Exclam from "../../asset/images/exclam.png";
import Notify from "../../asset/images/notify.png";

const Header = () => {
  return (
    <header className={classes.main}>
      <div className={classes.leftContent}>
        <Dots />
        <Logo />
        <Nav />
      </div>
      <div className={classes.leftContent}>
        <Input />
        <button className={classes.Btn}>
          <img src={Exclam} alt="exclamation" />
        </button>
        <button className={classes.Btn}>
          <img src={Notify} alt="notify" />
        </button>
        <button className={classes.avatar}>QK</button>
      </div>
    </header>
  );
};

export default Header;
