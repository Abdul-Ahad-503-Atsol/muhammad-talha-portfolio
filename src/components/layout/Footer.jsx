export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-wrap footer-inner">
        <a className="brand" href="#home">
          <span className="brand-mark">MT<span>.</span></span>
          <span className="brand-name">Muhammad Talha<small>Software Engineer · AI Systems</small></span>
        </a>
        <span>Built with care. © {new Date().getFullYear()} Muhammad Talha</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  );
}
