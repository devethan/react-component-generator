import shell from "shelljs";
import chalk from "chalk";
import { readFileSync } from "fs";

const getConfig = () => {
  const configPath = `${process.cwd()}/.comgen/config.json`;
  return JSON.parse(readFileSync(configPath).toString());
};

export const createComponent = (compName) => {
  try {
    const appConfig = getConfig();

    const { path } = appConfig;

    let compPath = `${process.cwd()}/${path.components}/${compName}`;

    if (shell.test("-d", compPath)) throw new Error("already exist");

    shell.mkdir([compPath]);

    const fileExt = "tsx";

    // Component
    shell.cp(
      `${process.cwd()}/.comgen/templates/Component.tsx`,
      `${compPath}/index.${fileExt}`
    );
    console.log(
      chalk.blue(`${compName}/index.${fileExt}`),
      chalk.green("CREATED")
    );
    // Test
    shell.mkdir([`${compPath}/__tests__/`]);
    shell.cp(
      `${process.cwd()}/.comgen/templates/Component.test.tsx`,
      `${compPath}/__tests__/${compName}.test.${fileExt}`
    );
    console.log(
      chalk.blue(`${compName}/__tests__/${compName}.test.${fileExt}`),
      chalk.green("CREATED")
    );
    // Styles
    shell.cp(
      `${process.cwd()}/.comgen/templates/styles.tsx`,
      `${compPath}/styles.${fileExt}`
    );
    console.log(
      chalk.blue(`${compName}/styles.${fileExt}`),
      chalk.green("CREATED")
    );
    // Types
    shell.cp(
      `${process.cwd()}/.comgen/templates/types.tsx`,
      `${compPath}/types.ts`
    );
    console.log(chalk.blue(`${compName}/types.ts`), chalk.green("CREATED"));
  } catch (error) {
    console.error(chalk.red(error.toSTring()));
  }
};
