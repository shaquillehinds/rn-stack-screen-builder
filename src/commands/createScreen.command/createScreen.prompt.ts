import inquirer from "inquirer";

const navigatorName = async () =>
  (
    await inquirer.prompt({
      name: "navigatorName",
      type: "input",
      message: "Name of the navigator this screen belongs to?",
    })
  ).navigatorName;

const createScreenPrompt = { navigatorName };

export default createScreenPrompt;
