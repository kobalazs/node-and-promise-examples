#!env node
const yargs = require('yargs');

yargs.command(
  'welcome [name]',
  'Show welcome message',
  yargs => {
    yargs.positional(
      'name',
      {
        describe: 'Name to greet',
        default: 'Terminal'
      }
    );
  },
  argv => {
    console.log(`Welcome ${argv.name}`);
  }
).argv;
