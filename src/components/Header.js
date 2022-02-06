import reactLogo from "./logo192.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={reactLogo} />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
