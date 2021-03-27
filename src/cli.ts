import inquirer from "inquirer";
import initProject from "./init";
import { createComponent } from "./createComponent";

const actions = {
  init: "init",
  generate: "generate",
};

const convCompName = (name: string): string => {
  return `${name[0].toUpperCase()}${name.slice(1)}`;
};

const parseArgs = (
  rawArgs: string[]
): { action: string; componentName: string } => {
  const firstArg = rawArgs[2]?.toLowerCase() ?? "";
  const secondArg = rawArgs[3] ? convCompName(rawArgs[3]) : "";

  return {
    action: firstArg,
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

  console.log(answers);

  return { path: answers.path };
};

export const cli = async (args: string[]): Promise<void> => {
  const { action, componentName } = parseArgs(args);

  switch (action) {
    case actions.init: {
      const options = await promptQuestions();
      await initProject(options);
      break;
    }
    case actions.generate:
      createComponent(componentName);
      break;
    default: {
      const help = `
                Welcome! 환영합니다!

                이슈는 이곳에 남겨주세요.
                https://github.com/devethan/react-component-generator/issues
            `;
      console.log(help);
      break;
    }
  }
};
