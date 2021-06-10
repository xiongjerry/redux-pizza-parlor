import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='App-header'>
    <h1 className='App-title'>Prime Pizza</h1>
    <nav>
      <ul className="App-header-ul">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/step2">Customer Info</Link>
        </li>
        <li>
          <Link to="/step3">Checkout</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
} // End Header


export default Header;