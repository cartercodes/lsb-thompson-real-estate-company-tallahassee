'use client'

import { useEffect } from 'react'

const phoneIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`

const shieldIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`

const homeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`

const chartIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>`

const sparklesIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>`

const keyIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" /></svg>`

const documentIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`

const currencyIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`

const mapPinIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`

const serviceIcons = [homeIcon, currencyIcon, chartIcon, keyIcon, documentIcon, sparklesIcon]

const trustIcons = [shieldIcon, homeIcon, chartIcon, sparklesIcon]

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-logo">{'Thompson Real Estate Company'}</div>
        <a
          href="tel:18507283627"
          className="nav-cta"
          aria-label="Call Thompson Real Estate Company"
          style={{ cursor: 'pointer' }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: phoneIcon }}
            aria-hidden="true"
          />
          <span>{'+1 850-728-3627'}</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt=""
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="hero-content">
          <p className="hero-tagline">
            {'Trusted Real Estate in Tallahassee, FL'}
          </p>
          <h1 className="hero-title">{'Thompson Real Estate Company'}</h1>
          <p className="hero-subtitle">
            From first showing to final closing — expert guidance for every step
            of your real estate journey.
          </p>
          <a
            href="tel:18507283627"
            className="hero-cta"
            aria-label="Call now to schedule a consultation"
            style={{ cursor: 'pointer' }}
          >
            <span
              dangerouslySetInnerHTML={{ __html: phoneIcon }}
              aria-hidden="true"
            />
            Schedule Your Consultation
          </a>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar" aria-label="Why clients trust us">
        {[
          { text: 'Trusted by 400+ Tallahassee Families Since Day One', icon: trustIcons[0] },
          { text: 'Deep Expertise Across Every Leon County Neighborhood', icon: trustIcons[1] },
          { text: '5-Star Rated on Google by Local Homeowners', icon: trustIcons[2] },
          { text: 'Average 21 Days on Market for Our Tallahassee Listings', icon: trustIcons[3] },
        ].map((item, i) => (
          <div
            className="trust-item"
            key={i}
            data-animate
            data-delay={i + 1}
          >
            <div
              className="trust-icon"
              dangerouslySetInnerHTML={{ __html: item.icon }}
              aria-hidden="true"
            />
            <span className="trust-text">{item.text}</span>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="section services" aria-label="Our services">
        <div className="services-header" data-animate>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">
            Full-Service Real Estate Expertise
          </h2>
        </div>
        <div className="services-grid">
          {[
            {
              title: 'Home Buying Made Simple',
              desc: 'Whether you\'re eyeing a craftsman bungalow in Midtown or a family home near Killearn Lakes, Thompson Real Estate Company guides you from first showing to closing day with expert local insight.',
            },
            {
              title: 'Strategic Home Selling',
              desc: 'We price, stage, and market your Tallahassee property to attract serious buyers fast. Our data-driven approach consistently delivers above-asking offers in neighborhoods across Leon County.',
            },
            {
              title: 'First-Time Buyer Programs',
              desc: 'Navigating Tallahassee\'s market as a first-time buyer doesn\'t have to be overwhelming. We connect you with down payment assistance, FSU/FAMU area starter homes, and lenders who fight for your rate.',
            },
            {
              title: 'Investment Property Advisory',
              desc: 'Tallahassee\'s steady rental demand from two major universities makes it an investor\'s dream. We identify high-yield properties and analyze cap rates so your portfolio grows with confidence.',
            },
            {
              title: 'Relocation Assistance',
              desc: 'Moving to Florida\'s capital city for work or family? We handle neighborhood tours, school district research, and commute planning so your transition to Tallahassee feels effortless.',
            },
            {
              title: 'Comparative Market Analysis',
              desc: 'Get a precise, no-obligation valuation of your Tallahassee home backed by real-time MLS data and hyperlocal trends. Know exactly what your property is worth before making any decisions.',
            },
          ].map((service, i) => (
            <div
              className="service-card"
              key={i}
              data-animate
              data-delay={i + 1}
            >
              <div
                className="service-icon"
                dangerouslySetInnerHTML={{ __html: serviceIcons[i] }}
                aria-hidden="true"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about" aria-label="About us">
        <div className="about-grid">
          <div className="about-image-wrap" data-animate>
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f28320be?auto=format&fit=crop&w=1400&q=80"
              alt=""
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
            />
          </div>
          <div className="about-content" data-animate data-delay="2">
            <p className="section-label">About</p>
            <h2 className="section-title">{'Thompson Real Estate Company'}</h2>
            <p className="about-text">{'Thompson Real Estate Company was built on a simple belief: buying or selling a home in Tallahassee should feel personal, not transactional. With deep roots in the capital city and an intimate knowledge of everything from the tree-lined streets of Betton Hills to the growing communities south of town, our team delivers results that big-box brokerages simply can\'t match. When your biggest investment is on the line, Tallahassee trusts Thompson.'}</p>
            <div className="about-stat-row">
              <div>
                <div className="about-stat-number">500+</div>
                <div className="about-stat-label">Homes Sold</div>
              </div>
              <div>
                <div className="about-stat-number">98%</div>
                <div className="about-stat-label">Client Satisfaction</div>
              </div>
              <div>
                <div className="about-stat-number">15+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section" aria-label="Contact us">
        <div className="cta-inner" data-animate>
          <h2 className="cta-title">{'Contact Thompson Real Estate Company'}</h2>
          <p className="cta-subtitle">
            Ready to buy or sell? Get a free market analysis and personalized
            strategy from our experienced team.
          </p>
          <a
            href="tel:18507283627"
            className="cta-button"
            aria-label="Call Thompson Real Estate Company now"
            style={{ cursor: 'pointer' }}
          >
            <span
              dangerouslySetInnerHTML={{ __html: phoneIcon }}
              aria-hidden="true"
            />
            {'+1 850-728-3627'}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">{'Thompson Real Estate Company'}</div>
            <address className="footer-address">
              {'1990 Village Green Way #2, Tallahassee, FL 32308, USA'}
              <br />
              {'Tallahassee, FL'}
            </address>
          </div>
          <div className="footer-contact">
            <a
              href="tel:18507283627"
              className="footer-phone-link"
              aria-label="Call Thompson Real Estate Company"
              style={{ cursor: 'pointer' }}
            >
              <span
                dangerouslySetInnerHTML={{ __html: phoneIcon }}
                aria-hidden="true"
              />
              {'+1 850-728-3627'}
            </a>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} {'Thompson Real Estate Company'}. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  )
}