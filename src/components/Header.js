import reactLogo from "./logo192.png";

const Header = props => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={reactLogo} />
      <h3>ReactFacts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

export default Header;
