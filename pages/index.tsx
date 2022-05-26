import type {NextPage} from "next";
import {Fragment} from "react";
import Header from "components/Header";
import Intro from "components/Intro";
import AboutMe from "components/About";
import MySkills from "components/Skills";
import MyWork from "components/Work";
import Collaboration from "components/Collaboration";
import Footer from "components/Footer";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Intro />
      <AboutMe />
      <MySkills />
      <MyWork />
      <Collaboration />
      <Footer />
    </Fragment>
  );
};

export default Home;

