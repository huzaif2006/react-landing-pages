import './Footer.css';

export default function Footer({ brandName, year }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {year} {brandName}. All rights reserved.</p>
        <p>Crafted with care for nature lovers everywhere.</p>
      </div>
    </footer>
  );
}
