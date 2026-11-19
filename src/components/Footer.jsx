import './footer.css'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a className="site-footer__brand" href="#home">
          Eraiyanbu<span aria-hidden="true">.</span>
        </a>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Eraiyanbu
        </p>
      </div>
    </footer>
  )
}

export default Footer