const description = {
  demand: true,
  alias: 'd',
  desc: 'Create TODO description'
}

const complete = {
  alias: 'c',
  default: true,
  desc: 'TODO status'
}

const argv = require('yargs')
  .command('create', 'Create New TODO', {
    description
  })
  .command('update', 'Update TODO status', {
    description,
    complete
  })
  .command('delete', 'Delete TODO item', {
    description
  })
  .help()
  .argv

  module.exports = {
    argv
  }