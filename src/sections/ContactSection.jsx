import contactDetails from '../data/contact.js'
import './contact-section.css'

function ContactSection() {
  const contactLinks = [
    contactDetails.email && {
      label: 'Email',
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
      external: false,
    },
    contactDetails.linkedInUrl && {
      label: 'LinkedIn',
      href: contactDetails.linkedInUrl,
      external: true,
    },
    contactDetails.githubUrl && {
      label: 'GitHub',
      href: contactDetails.githubUrl,
      external: true,
    },
  ].filter(Boolean)

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-section__layout">
        <div>
          <p className="section-kicker">Get in touch</p>
          <h2 id="contact-title">Let&apos;s connect.</h2>
        </div>
        <div className="contact-section__details" id="contact-options">
          <p className="contact-section__invitation">
            Have a question or want to talk about practical software development?
            I&apos;d be glad to hear from you.
          </p>
          {contactLinks.length > 0 ? (
            <ul className="contact-section__links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={
                      link.value
                        ? `${link.label} ${link.value}`
                        : `${link.label} contact for Eraiyanbu`
                    }
                    {...(link.external
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    {link.value ? link.value : link.label}{' '}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="contact-section__pending" role="status">
              <span className="contact-section__pending-title">
                Contact details are not configured yet.
              </span>
              <span>
                Verified email, LinkedIn, and GitHub details can be added here
                when available.
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactSection