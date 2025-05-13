// a component is a function which returns jsx nd jsx is html thaT HAS JS WRITTEN DIREctly inside it 
import { useState , useEffect } from "react"
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
  const [selectedTab , setSelectedTab] = useState('Open')

  function handleAddTodo (newTodo) {
        //duplicate  the copy and completely overwrite
        //...todos spreads the origonal todos or copies and then input property appends the new todo
        const newTodoList = [...todos, {input : newTodo, complete : false}]
        setTodos(newTodoList)
        handleSaveData(newTodoList)
  }

  function handleCompleteTodo (index) {
     //update/edit/modify
     let newTodoList = [...todos]
     let completedTodo = todos[index]
     completedTodo['complete'] = true
     newTodoList[index] = completedTodo
     setTodos(newTodoList)
     handleSaveData(newTodoList)
   }
  function handleDeleteTodo (index) {
    let newTodoList =  todos.filter((val , valIndex) => {
       return valIndex !== index 
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos){
    localStorage.setItem('todo-app',JSON.stringify({ todos: currentTodos }))
  }

  useEffect (( ) => {
     const data = localStorage.getItem('todo-app')
     if (data) {
      const db = JSON.parse(data)
      setTodos(db.todos)
  }
  } ,[])

  return ( //react fragment <> where we can wrap our code
    <>
      <Header todos={todos} />
      <Tabs selectedTab = {selectedTab} setSelectedTab= {setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo = {handleCompleteTodo} handleDeleteTodo = {handleDeleteTodo} todos={todos} selectedTab={selectedTab} />
      <TodoInput handleAddTodo = {handleAddTodo}/>

    </>
  )
}

export default App
