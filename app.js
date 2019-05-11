// const argv = require('yargs').argv
const argv = require('./config/yargs').argv
const todo = require('./todo/todo')
const colors = require('colors')

let command = argv._[0]

switch (command) {
  case 'create':
    let task = todo.create(argv.description)
    console.log(task)
    break;

  case 'list':
    let list = todo.getList(argv.description, argv.complete)

    for( let task of list ) {
      console.log(`==========TODO==========`.green)
      console.log(`${task.description}`)
      console.log(`Estado: ${task.complete}`)
      console.log(`========================`.green)
    }
    break

  case 'update':
    let updated = todo.update(argv.description, argv.complete)
    console.log(updated)
    break

  case 'delete':
    let deleted = todo.deleteItem(argv.description)
    console.log(deleted)
    break

  default:
    console.log('Command not found')
}