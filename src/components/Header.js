const Header = () => {
  return (
    <header>
      <nav>
        <img src={require("./logo192.png")} />
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
