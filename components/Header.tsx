import classNames from "classnames";
import Link from "next/link";
import {AnchorHTMLAttributes, FC} from "react";

import styles from "styles/modules/home/Header.module.scss";

const NavItem: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href = "#",
  children,
  className,
  ...props
}) => {
  return (
    <Link href={href}>
      <a className={classNames(styles.link, className)} {...props}>
        {children}
      </a>
    </Link>
  );
};

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NavItem href="/">About Me</NavItem>
      <NavItem href="/contact" className={styles.button}>
        Say Hello
      </NavItem>
    </header>
  );
};

export default Header;

