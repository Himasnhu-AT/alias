# Alias

Alias is a command-line tool that allows you to set aliases for terminal commands and execute them using these aliases. This can help to streamline your workflow by reducing the amount of typing required for frequently used commands.

## Installation

To install Alias, you need to have `Node.js` and `npm` installed on your machine. You can then install Alias by running the following command in your terminal:

```bash
npm i -g alias
```

## Usage

Alias provides several commands to manage your aliases:

### Add a new alias

You can add a new alias with the `add` command. The `add` command takes two arguments: the `alias` and the `command`.

```bash
alias add <shortcut> <command>
```

### List all aliases

You can list all your aliases with the `list` command.

```bash
alias list
```

### Remove an alias

You can remove an alias with the remove command. The remove command takes one argument: the alias.

```bash
alias remove <shortcut>
```

### Execute an alias

You can execute a command using its alias with the `e` command. The `e` command takes one argument: the `alias`.

```bash
alias remove <shortcut>
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

Alias is licensed under the MIT license.
