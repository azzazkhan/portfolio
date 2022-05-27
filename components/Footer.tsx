import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faFacebookF, faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
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

interface SocialIconProps {
  url?: string;
  icon: IconProp;
}
const SocialIcon: FC<SocialIconProps> = ({url = "#", icon}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.socialIcon}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ContactBox />
      <p className={styles.tagline}>Living, learning & leveling up one day at a time.</p>
      <div className={styles.socialIconsWrapper}>
        <SocialIcon
          url={`https://www.twitter.com/${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`}
          icon={faTwitter}
        />
        <SocialIcon
          url={`https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`}
          icon={faLinkedinIn}
        />
        <SocialIcon
          url={`https://www.facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK_USERNAME}`}
          icon={faFacebookF}
        />
        <SocialIcon
          url={`https://www.github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
          icon={faGithub}
        />
      </div>
      <div className={classNames(styles.copyrights, "lato")}>
        Handcrafted by{" "}
        <a
          href={`https://www.github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          title="Azzaz Khan">
          me
        </a>{" "}
        &copy; twentytwentytwo
      </div>
    </footer>
  );
};

export default Footer;

