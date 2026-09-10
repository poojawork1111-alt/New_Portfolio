import './Header.css';

const Header = () => {
  return (
    <header className="header glass">
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <span className="text-gradient">Dev</span>Portfolio
          </a>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="btn-primary">Contact Me</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
