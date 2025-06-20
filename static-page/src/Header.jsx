export default function Header(){
  return (
    <>
     <header className="header">
      <img src="react.png" alt="react logo" className="image"></img>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
    </>
  )
}