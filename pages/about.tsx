import type {NextPage} from "next";
import Link from "next/link";
import {Fragment} from "react";

const About: NextPage = () => {
  return (
    <Fragment>
      <p className="mb-5">About me</p>

      <Link href="/">
        <a>Home</a>
      </Link>
    </Fragment>
  );
};

export default About;

