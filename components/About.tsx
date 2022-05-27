import {FC} from "react";
import classNames from "classnames";

import styles from "styles/modules/home/About.module.scss";

const AboutMe: FC = () => {
  return (
    <div className={styles.section}>
      <h1 className={classNames(styles.heading, "exo2 lg:text-4.5xl")}>
        Hi, I&apos;m Azzaz. Nice to meet you.
      </h1>
      <p className={styles.description}>
        Since beginning my journey as a freelancer designer nearly 4 years ago, I’ve done remote
        work for agencies, consulted for startups, and collaborated with talented people to create
        digital products for both business and consumer use. I’m quietly, naturally curious, and
        perpetually working on improving my chops one challenge at a time.
      </p>
    </div>
  );
};

export default AboutMe;

