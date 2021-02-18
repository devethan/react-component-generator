import inquirer from "inquirer";
import initProject from "./init";
// import { createComponent } from "./createComponent";

const parseArgs = (rawArgs) => {
  const firstArg = rawArgs[2] ? rawArgs[2].toLowerCase() : null;
  const secondArg = rawArgs[3] ? rawArgs[3].toLowerCase() : null;
  const thirdArg = rawArgs[4] ? rawArgs[4].split(" ")[0].trim() : null;

  const actionType = {
    init: "init",
    generate: "generate",
  };

  return {
    action: actionType[firstArg] || null,
    componentName: thirdArg,
  };
};

const promptQuestions = async () => {
  const questions = [
    // 어느 위치에 컴포넌트를 만들 것인지에 대한 정보 공유
    {
      type: "input",
      name: "path",
      message:
        "Please enter where you'll create component.(default: src/components)",
    },
  ];

  const answers = await inquirer.prompt(questions);
  const projectOptions = {};
  projectOptions.path = answers.path;
  return projectOptions;
};

export const cli = async (args) => {
  let { action, componentName } = parseArgs(args);

  switch (action) {
    case "init":
      const options = await promptQuestions();
      await initProject(options);
      break;

    // case "generate":
    //   createComponent(componentName);
    //   break;

    default:
      const help = `
                Welcome! 환영합니다!

                이슈는 이곳에 남겨주세요.
                https://github.com/devethan/react-native-template/issues
            `;
      console.log(help);
      break;
  }
};
