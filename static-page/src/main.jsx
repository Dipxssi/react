import {createRoot} from "react-dom/client"
import './index.css';
const root = createRoot(document.getElementById("root"));
function Page() {
  return(
    <>
    <header >
      <img src="react.png" alt="react logo" width="40px"></img>
    </header>
    <main>
    <h1>Reasons to learn React</h1>
    <ol>
      <li>React is a popular library , so I will be able to fit in with all the coolest devs out there! </li>
      <li>I am more likely to get a job as a front end developer if I know React</li>
    </ol>
    </main>
    <footer><small>All rights reserved</small></footer>
    </>
  )
}
root.render(
  <Page />
)