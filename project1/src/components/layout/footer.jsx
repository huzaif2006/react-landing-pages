
import './footer.css';
import { FaFacebookF , FaPinterestP, FaPhone , FaInstagram} from "react-icons/fa";

// News item ke liye chota component
function NewsItem(props) {
  return (
    <div className="news-item">
      <img src={props.img} alt="news" className="news-thumb" />
      <div className="news-text">
        <p className="news-date">{props.date}</p>
        <p className="news-title">{props.title}</p>
      </div>
    </div>
  );
}

function Footer(props) {
  const footerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${props.bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <footer className="footer" style={footerStyle}>
      {/* Top Part: Logo aur Social Icons */}
      <div className="footer-top">
        <div className="logo-section">
          <img src="./logo.webp" alt="" width={60}/>
        </div>
        <div className="social-section">
          <span>Follow us</span>
          <div className="icons">
            {/* Simple icons as placeholders */}
            <i className="social-icon"><FaFacebookF /></i>
            <i className="social-icon"><FaPinterestP /></i>
            <i className="social-icon"><FaPhone /></i>
            <i className="social-icon"><FaInstagram /></i>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Middle Part: Columns */}
      <div className="footer-columns">
        <div className="col">
          <h3>About Us</h3>
          <p>(456) 789-12301</p>
          <p>info@modrino.co.uk</p>
          <p>South 13th street</p>
          <p>New york America</p>
        </div>

        <div className="col">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Services</li>
          </ul>
        </div>

        <div className="col">
          <h3>Recent News</h3>
          <NewsItem 
            img="https://www.allrecipes.com/thmb/Q_AQmmF7A_zqqygEJIpfEGbFdB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rough-puff-ddmfs-3x4-131-54dfcc666b39480fb9cc27bdd1e45a6a.jpg" 
            date="June 14, 2024" 
            title="Puff pastry bliss." 
          />
          <NewsItem 
            img="https://tenpoundcakecompany.com/wp-content/uploads/2024/09/Savory-Roast-Sweet-Potato-Puff-Pastry-Turnovers-19.jpg" 
            date="June 14, 2024" 
            title="Puff pastry bliss." 
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bake House. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;