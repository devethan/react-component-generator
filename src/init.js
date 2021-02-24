import chalk from "chalk";
import Listr from "listr";
import shell from "shelljs";
import { writeFileSync } from "fs";
import {
  componentTemplate,
  testTemplate,
  stylesTemplate,
  configTemplate,
} from "./templates";

const createConfigFile = ({ path }) => {
  const targetPath = path || "src/components";
  const componentName = "Component";
  const data = configTemplate(targetPath);
  const isExistDir = shell.test(
    "-d",
    `${process.cwd()}/.comgen`
  );
  if (isExistDir) throw new Error("already init on this project");

  shell.mkdir([
    `${process.cwd()}/.comgen`,
    `${process.cwd()}/.comgen/templates`,
  ]);
  writeFileSync(`${process.cwd()}/.comgen/config.json`, data);
  writeFileSync(
    `${process.cwd()}/.comgen/templates/Component.tsx`,
    componentTemplate(componentName)
  );
  writeFileSync(
    `${process.cwd()}/.comgen/templates/Component.test.tsx`,
    testTemplate(componentName)
  );
  writeFileSync(
    `${process.cwd()}/.comgen/templates/styles.tsx`,
    stylesTemplate()
  );
};

export default async (options) => {
  try {
    const taskArr = [
      {
        title: `Init comgen configuration`,
        task: () => createConfigFile(options),
      },
    ];

    const tasks = new Listr(taskArr);

    await tasks.run();

    console.log(
      "%s 이제부터 comgen를 이용하실 수 있습니다!",
      chalk.green.bold("DONE")
    );
  } catch (error) {
    console.error(chalk.red(error.toSTring()));
  }

  return true;
};
