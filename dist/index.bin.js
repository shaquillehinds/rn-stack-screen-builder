#!/usr/bin/env node
import { program } from "commander";
import * as commands from "./commands/index.js";
program
    .version("1.0.0")
    .description("Create or modify your react native navigation stack");
// Adding commands to program
for (let command in commands) {
    const commandKey = command;
    commands[commandKey](program);
}
program.parse(process.argv);
