import {FC} from "react";
import classNames from "classnames";
import projects from "data/projects.json";

import styles from "styles/modules/home/Work.module.scss";

const MyWork: FC = () => {
  return (
    <div className={styles.section}>
      <h1 className={classNames(styles.heading, "exo2")}>My Recent Work</h1>
      <p className={styles.details}>
        Here are a few recent design projects. Want to see more?{" "}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`}
          className="font-medium"
          target="_blank"
          rel="noreferrer">
          Email me
        </a>
        .
      </p>

      <Projects />
    </div>
  );
};

const Projects: FC = () => {
  return (
    <div className={styles.wrapper}>
      {projects.map(({image}) => {
        return (
          <div
            key={image}
            className={styles.project}
            style={{backgroundImage: `url('/images/projects/${image}')`}}
          />
        );
      })}
    </div>
  );
};

export default MyWork;

