import Layout from "../../Layout/layout";
import Drag from "../Drag/drag";
import Bar from "./Bar/bar";
import BarTwo from "./BarTwo/barTwo";
import classes from "./landing.module.css";

const Landing = () => {
  return (
    <Layout>
      <Bar />
      <BarTwo />
      <Drag />
    </Layout>
  );
};

export default Landing;
