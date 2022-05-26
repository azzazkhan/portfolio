import type {NextPage} from "next";
import {Fragment} from "react";
import Header from "components/Header";
import Intro from "components/Intro";
import AboutMe from "components/About";
import MySkills from "components/Skills";
import MyWork from "components/Work";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Intro />
      <AboutMe />
      <MySkills />
      <MyWork />
    </Fragment>
  );
};

export default Home;

