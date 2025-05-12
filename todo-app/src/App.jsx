// a component is a function which returns jsx nd jsx is html thaT HAS JS WRITTEN DIREctly inside it 
import { useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
function App() {
  /*
  const todos = [
    { input: 'Hello! Add your first todo !', complete: true },
    { input: 'Get the groceries !', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true }
  ]*/
  //set function
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo !', complete: true }
  ])

  function handleAddTodo (newTodo) {
        //duplicate  the copy and completely overwrite
        //...todos spreads the origonal todos or copies and then input property appends the new todo
        const newTodoList = [...todos, {input : newTodo, complete : false}]
        setTodos(newTodoList)
  }

  function handleEditTodo(){

  }
  function handleDeleteTodo () {

  }

  return ( //react fragment <> where we can wrap our code
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleAddTodo = {handleAddTodo}/>

    </>
  )
}

export default App
