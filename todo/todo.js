const fs = require('fs')

let todoList = []

const saveDB = () => {
  let data = JSON.stringify(todoList)

  fs.writeFile(`db/data.json`, data, err => {
    if (err)
      throw new Error('New file failed')
    else
      console.log(`data.json created`)
  });

}

const getDB = () => {
  try {
    todoList = require('../db/data.json')
  } catch (error) {
    todoList = []
  }
}

const create = description => {
  getDB()
  let todo = {
    description,
    complete: false
  }

  todoList.push(todo)

  saveDB()
  return todo
}

const getList = () => {
  getDB()
  return todoList
}

const update = ( description, complete = true) => {
  getDB()

  let index = todoList.findIndex( task => task.description === description )

  if ( index >= 0 ) {
    todoList[index].complete = complete
    saveDB()
    return true
  } else {
    return false
  }
}

const deleteItem = ( description ) => {
  getDB()
  let newTodoList = todoList.filter(item => item.description !== description)
  if ( todoList.length === newTodoList.length ) {
    return false
  } else {
    todoList = newTodoList
    saveDB()
    return true
  }
}


module.exports = {
  create,
  getList,
  update,
  deleteItem
}