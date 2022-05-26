import {FC} from "react";
import Image from "next/image";
import classNames from "classnames";

import styles from "styles/modules/home/Intro.module.scss";

const Intro: FC = () => {
  return (
    <div className={styles.section}>
      <h2 className={classNames(styles.heading, "exo2 lg:text-4.5xl")}>
        Senior Web Developer and Cloud Engineer
      </h2>
      <p className={classNames(styles.slogan, "ubuntu")}>
        I design awesome web apps, and I love what I do.
      </p>

      <div className={styles.avatarWrapper}>
        <Image
          src="/images/avatar.svg"
          width={200}
          height={200}
          priority
          className={styles.avatar}
          alt="Me"
        />
      </div>
    </div>
  );
};

export default Intro;

