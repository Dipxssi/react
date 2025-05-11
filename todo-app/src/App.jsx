// a component is a function which returns jsx nd jsx is html thaT HAS JS WRITTEN DIREctly inside it 
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  const todos = [
    { input: 'Hello! Add your first todo !', complete: true },
    { input: 'Get the groceries !', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true }
  ]

  return ( //react fragment <> where we can wrap our code
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />

    </>
  )
}

export default App
