import classNames from "classnames";
import {FC} from "react";
import styles from "styles/modules/home/Collaboration.module.scss";

const Collaboration: FC = () => {
  return (
    <div className={styles.section}>
      <h1 className={classNames(styles.heading, "exo2")}>
        Interested in collaborating or investing?
      </h1>
      <p className={classNames(styles.description, "ubuntu")}>
        I&apos;m always open to discussing product design work or partnership opportunities.
      </p>
      <a href="#contact" className={styles.button}>
        Start a conversation
      </a>
    </div>
  );
};

export default Collaboration;

