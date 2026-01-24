import './Navbar.css';

export default function Navbar({ logoText, links }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">{logoText}</div>
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="navbar-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
