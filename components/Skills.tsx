import {FC, Fragment, ReactNode} from "react";
import classNames from "classnames";

import styles from "styles/modules/home/Skills.module.scss";
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  children: ReactNode;
}
const Card: FC<CardProps> = ({icon, title, description, children}) => {
  return (
    <div className={styles.card}>
      <div className="mx-auto">
        <Image src={icon} width={48} height={48} priority className={styles.cardIcon} alt={title} />
        <h2 className={classNames(styles.cardHeading, "exo2")}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        {children}
      </div>
    </div>
  );
};

interface EnjoymentsProps {
  title: string;
  children: ReactNode;
}
const Enjoyments: FC<EnjoymentsProps> = ({title, children}) => {
  return (
    <Fragment>
      <h4 className={styles.enjoymentsTitle}>{title}</h4>
      <span>{children}</span>
    </Fragment>
  );
};

interface ToolsProps {
  title: string;
  tools: string[];
}
const Tools: FC<ToolsProps> = ({title, tools}) => {
  return (
    <Fragment>
      <h4 className={styles.toolsTitle}>{title}</h4>
      {tools.map((tool, index) => {
        return (
          <span className={classNames(styles.toolName, "lato")} key={index}>
            {tool}
          </span>
        );
      })}
    </Fragment>
  );
};

const MySkills: FC = () => {
  return (
    <div className={styles.section}>
      <Card
        icon="/images/designer.svg"
        title="Designer"
        description="I value simple content structure, clean design patterns, and thoughtful interactions.">
        <Enjoyments title="Things I enjoy designing">UX, UI, Web, Mobile, Apps, Logos</Enjoyments>
        <Tools
          title="Design Tools"
          tools={["Adobe Illustrator", "Adobe XD", "Figma", "Pen & Paper", "Sketch"]}
        />
      </Card>

      <Card
        icon="/images/frontend.svg"
        title="Developer"
        description="I like to code things from scratch, and enjoy bringing ideas to life in the browser.">
        <Enjoyments title="Languages I speak">Typescript, Python, C++, R</Enjoyments>
        <Tools
          title="Dev Tools"
          tools={["Microsoft VS Code", "GitHub", "OhMyZsh", "AWS", "Google Cloud", "Digital Ocean"]}
        />
      </Card>
    </div>
  );
};

export default MySkills;

