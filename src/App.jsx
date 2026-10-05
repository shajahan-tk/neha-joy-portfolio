import React, { useEffect, useState } from "react";
import {
  ArrowUpRight, Blocks, Bot, Braces, Code2, Cpu, Database, ExternalLink,
  Github, Globe2, Headphones, Laptop2, Layers3, Linkedin, Mail, Menu,
  MonitorCheck, PackageCheck, Phone, Rocket, ServerCog, Sparkles,
  TerminalSquare, X
} from "lucide-react";

const services = [
  ["Software Development", "Business-focused applications, custom tools and scalable solutions built with clean, maintainable code.", Code2],
  ["Front-End Development", "Responsive React interfaces focused on usability, speed and polished user experience.", Braces],
  ["Software Deployment", "Build preparation, production releases, version updates and deployment support.", PackageCheck],
  ["Application Support", "Issue diagnosis, user support, bug coordination and functional troubleshooting.", Headphones],
  ["IT Support", "Desktop, software, systems and day-to-day technical support for reliable operations.", ServerCog]
];

const skills = [
  "React","JavaScript","HTML5","CSS3","Responsive UI","Git & GitHub","Vite",
  "REST APIs","SQL","Software Deployment","Windows Support","Troubleshooting",
  "Application Support","UI/UX Thinking","Automation"
];

const projects = [
  {
    title:"Operations Dashboard",
    category:"Front-End / Business App",
    text:"A responsive dashboard concept with KPIs, searchable records, status tracking and modern business UI.",
    tags:["React","Dashboard","Responsive"]
  },
  {
    title:"Deployment Console",
    category:"Software Deployment",
    text:"A release management interface for build status, environment readiness, deployment history and support notes.",
    tags:["Deployment","Workflow","UI"]
  },
  {
    title:"Support Desk Portal",
    category:"IT & Application Support",
    text:"A support portal for issue logging, priority management, ticket progress and user communication.",
    tags:["Support","React","Service Desk"]
  },
  {
    title:"Smart Workflow Assistant",
    category:"Automation",
    text:"A lightweight automation concept that helps teams reduce repetitive work and organize support processes.",
    tags:["Automation","AI Ready","Productivity"]
  }
];

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll",fn);
    return () => window.removeEventListener("scroll",fn);
  },[]);

  return (
    <div className="app">
      <div className="ambient one" />
      <div className="ambient two" />
      <div className="grid-overlay" />

      <header className={scrolled ? "topbar scrolled" : "topbar"}>
        <a href="#home" className="logo">
          <span className="logo-cube">
            <i className="face front">N</i><i className="face right"/><i className="face top"/>
          </span>
          <span><strong>NEHA JOY</strong><small>Software Developer</small></span>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {["About","Services","Skills","Projects","Contact"].map(x =>
            <a key={x} href={"#"+x.toLowerCase()} onClick={()=>setMenuOpen(false)}>{x}</a>
          )}
          <a className="nav-pill" href="#contact" onClick={()=>setMenuOpen(false)}>Let's Connect</a>
        </nav>

        <button className="menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="hero-badge"><Sparkles size={15}/> Building digital experiences with code</div>
            <p className="hello">Hello, I’m</p>
            <h1>NEHA <span>JOY</span></h1>
            <h2>Software Developer <b>•</b> Front-End Developer <b>•</b> Deployment <b>•</b> Support <b>•</b> IT Support</h2>
            <p className="hero-desc">
              I build polished front-end experiences, practical software solutions and dependable deployment/support workflows that help teams work better.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Explore My Work <ArrowUpRight size={18}/></a>
              <a className="btn ghost" href="#contact">Contact Me</a>
            </div>
            <div className="mini-metrics">
              <div><strong>DEV</strong><span>Clean & scalable</span></div>
              <div><strong>UI</strong><span>Modern & responsive</span></div>
              <div><strong>SUPPORT</strong><span>Reliable & practical</span></div>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit a"/><div className="orbit b"/>
            <div className="floating-chip chip1"><Code2 size={18}/> React</div>
            <div className="floating-chip chip2"><Rocket size={18}/> Deploy</div>
            <div className="floating-chip chip3"><MonitorCheck size={18}/> Support</div>

            <div className="scene">
              <div className="device">
                <div className="device-bar">
                  <div className="dots"><i/><i/><i/></div><span>portfolio.jsx</span>
                </div>
                <div className="device-screen">
                  <div><span>01</span><code>const developer = "Neha Joy";</code></div>
                  <div><span>02</span><code>const focus = ["React", "Support"];</code></div>
                  <div><span>03</span><code>deploy("production");</code></div>
                  <div><span>04</span><code>solve(); improve(); repeat();</code></div>
                </div>
              </div>

              <div className="cube">
                <div className="cube-face cf-front"><Layers3/></div>
                <div className="cube-face cf-back"><Database/></div>
                <div className="cube-face cf-right"><Globe2/></div>
                <div className="cube-face cf-left"><Cpu/></div>
                <div className="cube-face cf-top"><Blocks/></div>
                <div className="cube-face cf-bottom"><TerminalSquare/></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-title"><span>01 / ABOUT</span><h2>Developer mindset. Support discipline.</h2></div>
          <div className="about-layout">
            <div className="about-card large">
              <p>I’m <strong>Neha Joy</strong>, a software and front-end developer focused on creating usable interfaces, supporting applications and making software deployment smoother and more reliable.</p>
              <p>My approach combines development with hands-on support thinking: build clearly, test carefully, deploy responsibly and help users effectively.</p>
            </div>
            <div className="about-stack">
              <div className="about-card"><Laptop2/><strong>Development</strong><span>Modern front-end & software work</span></div>
              <div className="about-card"><PackageCheck/><strong>Deployment</strong><span>Build, release & production support</span></div>
              <div className="about-card"><Headphones/><strong>Support</strong><span>Issues, users & troubleshooting</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-title"><span>02 / SERVICES</span><h2>What I work on.</h2></div>
          <div className="service-grid">
            {services.map(([title,text,Icon],i)=>(
              <article className="service-card" key={title}>
                <div className="service-top"><span>0{i+1}</span><div className="service-icon"><Icon/></div></div>
                <h3>{title}</h3><p>{text}</p><a href="#contact">Work with me <ArrowUpRight size={15}/></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title"><span>03 / SKILLS</span><h2>Tools I use to build and support.</h2></div>
          <div className="skills-grid">
            <div className="skill-tags">{skills.map(x=><span key={x}>{x}</span>)}</div>
            <div className="stack-panel">
              <div className="stack-item"><Code2/><div><b>Front-End</b><small>React, JavaScript, HTML, CSS</small></div></div>
              <div className="stack-item"><Database/><div><b>Data & Integration</b><small>SQL, APIs, business data</small></div></div>
              <div className="stack-item"><PackageCheck/><div><b>Deployment</b><small>Builds, releases, version updates</small></div></div>
              <div className="stack-item"><Headphones/><div><b>Support</b><small>Troubleshooting, users, application issues</small></div></div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title row">
            <div><span>04 / PROJECTS</span><h2>Selected work & concepts.</h2></div>
            <a className="section-link" href="#contact">Start a project <ArrowUpRight size={17}/></a>
          </div>

          <div className="projects-grid">
            {projects.map((p,i)=>(
              <article className="project-card" key={p.title}>
                <div className={"project-visual pv"+(i+1)}>
                  <div className="project-window">
                    <div className="pw-top"><i/><i/><i/></div>
                    <div className="pw-body">
                      <div className="pw-side"/>
                      <div className="pw-main"><span/><span/><div className="pw-cards"><b/><b/><b/></div><em/></div>
                    </div>
                  </div>
                  <div className="glass-square g1"/><div className="glass-square g2"/>
                </div>
                <div className="project-content">
                  <span>{p.category}</span><h3>{p.title}</h3><p>{p.text}</p>
                  <div className="project-tags">{p.tags.map(t=><b key={t}>{t}</b>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title"><span>05 / PROCESS</span><h2>How I approach technical work.</h2></div>
          <div className="process-grid">
            {[
              ["01","Understand","Clarify the requirement, user need and technical constraints."],
              ["02","Build","Create a clean, maintainable and responsive solution."],
              ["03","Test","Validate the experience, behavior and edge cases."],
              ["04","Deploy","Release carefully and confirm production readiness."],
              ["05","Support","Monitor, troubleshoot and continuously improve."]
            ].map(([n,t,d])=><div className="process-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-wrap">
            <div>
              <span className="contact-label">LET'S BUILD SOMETHING</span>
              <h2>Need a developer who can also support the solution?</h2>
              <p>I’m open to software development, front-end, deployment, application support and IT support opportunities.</p>
              <div className="contact-list">
                <a href="mailto:your@email.com"><Mail size={18}/> your@email.com</a>
                <a href="tel:+971000000000"><Phone size={18}/> +971 XX XXX XXXX</a>
              </div>
            </div>
            <div className="contact-panel">
              <div className="contact-orb"><Bot/></div>
              <h3>Start a conversation</h3>
              <p>Share your project, technical requirement or opportunity.</p>
              <a className="btn primary" href="mailto:your@email.com">Send Email <ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-left">
          <span className="logo-cube small"><i className="face front">N</i><i className="face right"/><i className="face top"/></span>
          <div><strong>NEHA JOY</strong><span>Software Developer</span></div>
        </div>
        <p>© 2026 Neha Joy • Built with React</p>
        <div className="socials">
          <a href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
          <a href="#" aria-label="GitHub"><Github size={18}/></a>
          <a href="#" aria-label="Website"><ExternalLink size={18}/></a>
        </div>
      </footer>
    </div>
  );
}
