import "./Footer.css";

const FOOTER_LINKS = ["Privacy Policy", "Terms of Service", "Contact Us", "Careers"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Savor</span>
          <p className="footer__copy">© 2024 Savor Recipes. Crafted for the home cook.</p>
        </div>
        <nav className="footer__links">
          {FOOTER_LINKS.map((link) => (
            <a key={link} href="#" className="footer__link" onClick={(e) => e.preventDefault()}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
