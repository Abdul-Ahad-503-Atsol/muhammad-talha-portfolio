import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'My Work' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#experience', label: 'Experience' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">MT<span>.</span></span>
        <span className="brand-name">Muhammad Talha<small>Software Engineer · AI Systems</small></span>
      </a>
      <button
        type="button"
        className="mobile-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk </a>
      </nav>
    </header>
  );
}
