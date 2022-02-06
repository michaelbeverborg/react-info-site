const Page = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={require("./logo192.png")} width="40px" />
        </nav>
      </header>

      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100K stars on github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <footer>© Serros</footer>
    </div>
  );
};

export default Page;
