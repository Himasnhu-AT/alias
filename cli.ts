import * as yargs from "yargs";
import * as fs from "fs";
const exec = require("child_process").exec;

const shortcutsFilePath = "./shortcuts.json";

// Load shortcuts from file if it exists
let shortcuts: { [key: string]: string } = {};
if (fs.existsSync(shortcutsFilePath)) {
  const fileData = fs.readFileSync(shortcutsFilePath, "utf-8");
  shortcuts = JSON.parse(fileData);
}

yargs
  .command(
    "add <shortcut> <command>",
    "Add a new shortcut",
    (yargs) => {
      return yargs
        .positional("shortcut", {
          describe: "shortcut to add",
          type: "string",
        })
        .positional("command", {
          describe: "command to execute",
          type: "string",
        });
    },
    (argv) => {
      addCommand(argv.shortcut, argv.command);
    }
  )
  .command("list", "List all shortcuts", () => {
    listCommands();
  })
  .command(
    "remove <shortcut>",
    "Remove a shortcut",
    (yargs) => {
      return yargs.positional("shortcut", {
        describe: "shortcut to remove",
        type: "string",
      });
    },
    (argv) => {
      removeCommand(argv.shortcut);
    }
  )
  .command(
    "e <shortcut>",
    "Execute a shortcut",
    (yargs) => {
      return yargs.positional("shortcut", {
        describe: "shortcut to execute",
        type: "string",
      });
    },
    (argv) => {
      executeCommand(argv.shortcut);
    }
  )
  .help().argv;

function addCommand(shortcut: string, command: string) {
  console.log(command);
  console.log(shortcut);
  shortcuts[shortcut] = command;
  saveShortcutsToFile();
  console.log("Shortcut added successfully");
}

function listCommands() {
  console.log(shortcuts);
}

function removeCommand(shortcut: string) {
  delete shortcuts[shortcut];
  saveShortcutsToFile();
}

function executeCommand(shortcut: string) {
  const command = shortcuts[shortcut];
  console.log(`Shortcut: ${shortcut}`);
  console.log(`Command: ${command}`);
  if (!command) {
    console.log("Shortcut not found");
    return;
  }

  console.log(`Executing command: ${command}`);
  exec(command, (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

function saveShortcutsToFile() {
  const data = JSON.stringify(shortcuts);
  fs.writeFileSync(shortcutsFilePath, data, "utf-8");
}
