import world from '../images/world.png';

export default function Navbar() {
  return(
    <nav className="nav">
      <img src={world} alt="world" />
      <h3 className='nav--title'>my travel journal.</h3>
    </nav>
  )
}
