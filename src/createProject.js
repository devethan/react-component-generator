import chalk from "chalk";
import Listr from "listr";
import { writeFileSync } from "fs";

const createConfigFile = ({ path }) => {
  const data = `{
    "path": {
      "components": "${path || 'src/components'}"
    }
  }  
`;
  writeFileSync(`${process.cwd()}/react-native-template.json`, data);
};

export const createProject = async (options) => {
  const taskArr = [
    {
      title: `Init template generator with react-native-template`,
      task: () => createConfigFile(options),
    },
  ];

  const tasks = new Listr(taskArr);

  await tasks.run();

  console.log("%s 이제부터 react-native-template를 이용하실 수 있습니다!", chalk.green.bold("DONE"));
  return true;
};
