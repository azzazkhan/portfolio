import type {NextPage} from "next";
import {Fragment} from "react";
// import Header from "components/Header";
// import Intro from "components/Intro";
// import AboutMe from "components/About";
import MySkills from "components/Skills";

const Home: NextPage = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      {/* <Intro /> */}
      {/* <AboutMe /> */}
      <MySkills />
    </Fragment>
  );
};

export default Home;

