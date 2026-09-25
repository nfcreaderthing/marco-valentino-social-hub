import { type CSSProperties } from 'react';
import { ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import { SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si';

function Home() {
  const links = [
    {
      name: 'Facebook',
      handle: 'marco.valentino.caga.anan',
      href: 'https://facebook.com/marco.valentino.caga.anan',
      icon: SiFacebook,
      detail: 'Say hello',
    },
    {
      name: 'TikTok',
      handle: '@mavrkz0',
      href: 'https://www.tiktok.com/@mavrkz0',
      icon: SiTiktok,
      detail: 'Watch along',
    },
    {
      name: 'Instagram',
      handle: '@mar.codes',
      href: 'https://www.instagram.com/mar.codes',
      icon: SiInstagram,
      detail: 'See the latest',
    },
  ];

  return (
    <main className="hub-shell">
      <div className="hub-noise" aria-hidden="true" />
      <div className="hub-orbit orbit-one" aria-hidden="true" />
      <div className="hub-orbit orbit-two" aria-hidden="true" />

      <header className="hub-header">
        <a className="monogram" href="/" aria-label="Marco Valentino Caga-anan home" data-testid="link-home">
          MVC<span>.</span>
        </a>
        <p className="header-note">personal links / 01</p>
      </header>

      <section className="hub-grid" aria-labelledby="profile-heading">
        <div className="profile-column">
          <div className="image-stage">
            <div className="image-rail image-rail-top" aria-hidden="true">
              <span>IN FRAME</span><span>•</span><span>PERSONAL EDITION</span>
            </div>
            <div className="portrait-frame">
              <img
                src="/marco-profile.jpeg"
                alt="Marco Valentino Caga-anan by an airplane window"
                className="portrait"
                data-testid="img-profile"
              />
              <div className="portrait-wash" aria-hidden="true" />
            </div>
            <div className="image-rail image-rail-bottom" aria-hidden="true">
              <span>WINDOW SEAT</span><span className="rail-line" /><span>01 / 01</span>
            </div>
          </div>

          <div className="profile-copy">
            <p className="eyebrow">A small corner of the internet</p>
            <h1 id="profile-heading" data-testid="text-profile-name">
              Marco
              <br />
              <em>Valentino</em>
              <br />
              <span className="surname">Caga-anan</span>
            </h1>
            <p className="profile-prompt">
              Find me where I’m
              <br className="mobile-break" /> already hanging out.
            </p>
          </div>
        </div>

        <div className="links-column">
          <div className="links-intro">
            <p className="section-kicker">Open tabs</p>
            <p className="links-count">03 places to find me</p>
          </div>

          <nav className="social-links" aria-label="Marco's social profiles">
            {links.map(({ name, handle, href, icon: Icon, detail }, index) => (
              <a
                className="social-link"
                href={href}
                target="_blank"
                rel="noreferrer"
                key={name}
                data-testid={`link-social-${name.toLowerCase()}`}
                style={{ '--link-index': index } as CSSProperties}
              >
                <span className="link-index">0{index + 1}</span>
                <span className="social-icon" aria-hidden="true"><Icon /></span>
                <span className="social-copy">
                  <strong>{name}</strong>
                  <span>{handle}</span>
                </span>
                <span className="social-detail">{detail}</span>
                <ArrowUpRight className="link-arrow" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="links-footer">
            <span className="footer-rule" aria-hidden="true" />
            <p>Thanks for stopping by.</p>
            <ExternalLink className="footer-icon" aria-hidden="true" />
          </div>
        </div>
      </section>

      <footer className="hub-footer">
        <span>MARCO VALENTINO CAGA-ANAN</span>
        <span className="footer-center"><i aria-hidden="true" /> curated with care</span>
        <a href="#profile-heading" data-testid="link-back-top">back to top <ChevronRight aria-hidden="true" /></a>
      </footer>
    </main>
  );
}

export default function App() {
  return <Home />;
}
