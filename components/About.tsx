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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut accusamus rerum ab, adipisci,
        harum aperiam quae nobis temporibus maiores quos saepe debitis ipsum? Fuga eos quaerat vitae
        error, atque expedita et totam consectetur illum velit quo suscipit, doloremque odio
        doloribus repellendus aliquam nisi dolores quidem laudantium tenetur aspernatur nesciunt.
      </p>
    </div>
  );
};

export default AboutMe;

