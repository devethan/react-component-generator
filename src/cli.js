import inquirer from "inquirer";
import initProject from "./init";
import { createComponent } from "./createComponent";

const convCompName = (name) => {
  return `${name[0].toUpperCase()}${name.slice(1)}`;
};

const parseArgs = (rawArgs) => {
  const firstArg = rawArgs[2] ? rawArgs[2].toLowerCase() : null;
  const secondArg = rawArgs[3] ? convCompName(rawArgs[3]) : null;


  const actionType = {
    init: "init",
    generate: "generate",
  };

  return {
    action: actionType[firstArg] || null,
    componentName: secondArg,
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

    case "generate":
      createComponent(componentName);
      break;

    default:
      const help = `
                Welcome! 환영합니다!

                이슈는 이곳에 남겨주세요.
                https://github.com/devethan/react-component-generator/issues
            `;
      console.log(help);
      break;
  }
};
