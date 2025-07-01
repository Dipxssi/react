import chefImage from "../images/chef.png"
export default function Header (){
  return (
    <header>
      <nav>
        <img src={chefImage} alt="chef image"></img>
        <h1>Your Chef</h1>
      </nav>
    </header>
  )
}