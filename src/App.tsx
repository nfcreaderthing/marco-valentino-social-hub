import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Gamepad2, Radio, Sparkles } from 'lucide-react';
import { SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si';

type SocialLink = {
  name: string;
  handle: string;
  href: string;
  accent: string;
  icon: typeof SiFacebook;
  note: string;
};

const links: SocialLink[] = [
  {
    name: 'Facebook',
    handle: 'marco.valentino.caga.anan',
    href: 'https://facebook.com/marco.valentino.caga.anan',
    accent: 'blue',
    icon: SiFacebook,
    note: 'Connect',
  },
  {
    name: 'TikTok',
    handle: '@mavrkz0',
    href: 'https://www.tiktok.com/@mavrkz0',
    accent: 'pink',
    icon: SiTiktok,
    note: 'Watch',
  },
  {
    name: 'Instagram',
    handle: '@mar.codes',
    href: 'https://www.instagram.com/mar.codes',
    accent: 'orange',
    icon: SiInstagram,
    note: 'Follow',
  },
];

function App() {
  const [copied, setCopied] = useState(false);

  const copyHubLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="hub-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="ambient-glow glow-cyan" aria-hidden="true" />
      <div className="ambient-glow glow-pink" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="MVC home">
          <span className="brand-bracket">[</span>MVC<span className="brand-dot">:</span><span className="brand-bracket">]</span>
        </a>
        <div className="topbar-status"><span className="status-led" /> SIGNAL ONLINE</div>
        <button className="share-button" type="button" onClick={copyHubLink}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? 'COPIED' : 'SHARE HUB'}
        </button>
      </header>

      <section className="hero" aria-labelledby="profile-heading">
        <div className="hero-side hero-side-left" aria-hidden="true">
          <span>RGB_LINK // 001</span>
          <span className="vertical-rule" />
          <span>PHILIPPINES</span>
        </div>

        <div className="profile-card">
          <div className="card-topline">
            <span><Radio size={13} /> PLAYER PROFILE</span>
            <span>V. 01.0</span>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-ring portrait-ring-one" />
            <div className="portrait-ring portrait-ring-two" />
            <div className="portrait-frame">
              <img src="marco-profile.jpeg" alt="Marco Valentino Caga-anan by an airplane window" />
              <div className="portrait-glitch" aria-hidden="true" />
            </div>
            <div className="level-badge"><span>LVL</span><strong>01</strong></div>
          </div>
          <div className="profile-label"><span>PLAYER_001</span><span className="label-line" /><span>ONLINE</span></div>
          <h1 id="profile-heading">
            <span>Marco</span>
            <span className="name-accent">Valentino</span>
            <span>Caga-anan</span>
          </h1>
          <p className="profile-description"><Sparkles size={14} /> Digital presence unlocked. Find all my current socials below.</p>
        </div>

        <div className="links-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">SELECT A CHANNEL</p>
              <h2>Drop in.</h2>
            </div>
            <Gamepad2 className="heading-icon" size={42} strokeWidth={1.2} aria-hidden="true" />
          </div>

          <nav className="social-links" aria-label="Marco's social profiles">
            {links.map(({ name, handle, href, accent, icon: Icon, note }, index) => (
              <a className={`social-link social-link-${accent}`} href={href} target="_blank" rel="noreferrer" key={name}>
                <span className="social-index">0{index + 1}</span>
                <span className="social-icon"><Icon size={22} /></span>
                <span className="social-copy"><strong>{name}</strong><span>{handle}</span></span>
                <span className="social-note">{note}</span>
                <ArrowUpRight className="social-arrow" size={19} aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="panel-footer">
            <span>03 CHANNELS ACTIVE</span>
            <span className="equalizer" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <span>GG, SEE YOU THERE</span>
          </div>
        </div>

        <div className="hero-side hero-side-right" aria-hidden="true">
          <span>NO LAG</span>
          <span className="right-cross">+</span>
          <span>STAY CONNECTED</span>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} MARCO VALENTINO CAGA-ANAN</span>
        <span className="footer-center">SOCIAL LINKER HUB <span>///</span> PUBLIC ACCESS</span>
        <span>MADE FOR THE NEXT LEVEL <span className="footer-spark">✦</span></span>
      </footer>
    </main>
  );
}

export default App;