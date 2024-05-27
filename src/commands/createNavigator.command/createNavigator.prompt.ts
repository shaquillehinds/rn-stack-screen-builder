import inquirer from "inquirer";

const navigatorName = async () =>
  (
    await inquirer.prompt({
      name: "navigatorName",
      type: "input",
      message: "Name of the navigator?",
    })
  ).navigatorName;

const createNavigatorPrompt = { navigatorName };

export default createNavigatorPrompt;
