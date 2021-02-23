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
    `${process.cwd()}/.react-native-template`
  );
  if (isExistDir) throw new Error("already init on this project");

  shell.mkdir([
    `${process.cwd()}/.react-native-template`,
    `${process.cwd()}/.react-native-template/templates`,
  ]);
  writeFileSync(`${process.cwd()}/.react-native-template/config.json`, data);
  writeFileSync(
    `${process.cwd()}/.react-native-template/templates/Component.tsx`,
    componentTemplate(componentName)
  );
  writeFileSync(
    `${process.cwd()}/.react-native-template/templates/Component.test.tsx`,
    testTemplate(componentName)
  );
  writeFileSync(
    `${process.cwd()}/.react-native-template/templates/styles.tsx`,
    stylesTemplate()
  );
};

export default async (options) => {
  try {
    const taskArr = [
      {
        title: `Init react-native-template configuration`,
        task: () => createConfigFile(options),
      },
    ];

    const tasks = new Listr(taskArr);

    await tasks.run();

    console.log(
      "%s 이제부터 react-native-template를 이용하실 수 있습니다!",
      chalk.green.bold("DONE")
    );
  } catch (error) {
    console.error(chalk.red(error.toSTring()));
  }

  return true;
};
