import Header from "./Components/Header.jsx"
import Entry from "./Components/Entry.jsx"
import data from "../data.js"

export default function App(){
  const entries= data.map((entry)=>(
   <Entry
      key={entry.id}
      {...entry}
   />
  ))
  return(
    <>
   <Header/>
   <main>{entries}</main>
   </>
  )
}