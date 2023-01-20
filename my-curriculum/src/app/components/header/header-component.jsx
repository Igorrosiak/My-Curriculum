import "./header-styles"

export const HeaderComponent = props => {
  return (
    <header>
      <nav>
        <div className="logo">

        </div>
 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Skills</li></a>
          <a href="#"><li>Works</li></a>
          <a href="#"><li>About Me</li></a>
          <a href="#"><li>Certificates</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </nav>
    </header>
  );
}