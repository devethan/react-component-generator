import chalk from "chalk";
import Listr from "listr";
import shell from "shelljs";
import { writeFileSync } from "fs";
import { componentTemplate, testTemplate, configTemplate } from "./templates";

const createConfigFile = ({ path }) => {
  const targetPath = path || "src/components";
  const componentName = "Component";
  const data = configTemplate(targetPath);
  shell.mkdir([
    process.cwd(),
    `${process.cwd()}/.react-native-template`,
    `${process.cwd()}/.react-native-template/templates`,
  ]);
  writeFileSync(`${process.cwd()}/.react-native-template/config.json`, data);
  writeFileSync(
    `${process.cwd()}/.react-native-template/templates/${componentName}.tsx`,
    componentTemplate(componentName)
  );
  writeFileSync(
    `${process.cwd()}/.react-native-template/templates/Component.test.tsx`,
    testTemplate(componentName)
  );
};

export default async (options) => {
  const taskArr = [
    {
      title: `Init template generator with react-native-template`,
      task: () => createConfigFile(options),
    },
  ];

  const tasks = new Listr(taskArr);

  await tasks.run();

  console.log(
    "%s 이제부터 react-native-template를 이용하실 수 있습니다!",
    chalk.green.bold("DONE")
  );
  return true;
};
