import ReactMarkdown from "react-markdown"
export default function Recipe(props){
  return(
    <section class="suggested-recipe-container" aria-live="polite">
      <h2>Your Personal Chef Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}