import {FC} from "react";
import classNames from "classnames";
import styles from "styles/modules/home/Footer.module.scss";

const ContactBox: FC = () => {
  return (
    <div className={styles.projectBox}>
      <div className="flex items-center justify-center">
        <h1 className={classNames(styles.heading, "exo2")}>Start a project</h1>
      </div>
      <div className="flex items-center justify-center col-span-2">
        <p className={classNames(styles.description, "ubuntu")}>
          Interested in working together? We should queue up a chat. I&apos;ll buy the coffee.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <a href="#contact" className={styles.button}>
          Let&apos;s do this
        </a>
      </div>
    </div>
  );
};

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ContactBox />
      <p className={styles.tagline}>
        Living, learning & leveling up one
        <br />
        day at a time.
      </p>
      <div className={styles.socialIcons}>
        <a href="#">
          <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fab fa-dribbble" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

