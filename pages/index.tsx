import type {NextPage} from "next";
import Link from "next/link";
import {Fragment} from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <p className="mb-5">Homepage</p>

      <Link href="/about">
        <a>About</a>
      </Link>
    </Fragment>
  );
};

export default Home;
