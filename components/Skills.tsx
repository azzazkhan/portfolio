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
        icon="/images/cloud-computing.png"
        title="Cloud Computing"
        description="I like to deploy and manage apps at scale.">
        <Enjoyments title="Services I use">Compute, Serverless, Docker, DevOps</Enjoyments>
        <Tools
          title="Cloud Providers"
          tools={["AWS", "Google Cloud", "Digital Ocean", "Firebase", "GitHub"]}
        />
      </Card>

      <Card
        icon="/images/frontend.svg"
        title="Developer"
        description="I like to code things from scratch, and enjoy bringing ideas to life.">
        <Enjoyments title="Languages I speak">HTML, CSS, Typescript, PHP</Enjoyments>
        <Tools
          title="Dev Techs"
          tools={["React/Next", "Vue/Nuxt", "Express & Nest", "Laravel", "WordPress"]}
        />
      </Card>
    </div>
  );
};

export default MySkills;

