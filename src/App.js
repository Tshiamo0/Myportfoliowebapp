import './App.css';
import resumePdf from './Tshiamo Mokete resume.pdf';

const projects = [
  {
    title: 'Allshoes',
    description: 'A fully functional e-commerce web application built with Django and Python, featuring a user-friendly interface, product catalog, shopping cart, and secure payment processing.',
    tags: ['Django Python', 'CSS', 'Responsive Design'],
  },
  {
    title: 'Gymania',
    description: 'A fully functional web app that connects people locally for different sports events in their respective locations. It was developed using HTML, CSS, and JavaScript, with Firebase as the backend for data storage and user authentication.',
    tags: ['CSS', 'Firebase', 'JavaScript'],
  },
  {
    title: 'Music Player',
    description: 'A fully functional music player web application built with JavaScript, featuring a sleek user interface and smooth audio playback and local storage.',
    tags: ['JavaScript', 'Local Storage', 'Responsive Design'],
  },
];

const skills = [
  'React',
  'JavaScript',
  'Python',
  'Node.js',
  'Django',
  'HTML & CSS',
  'Firebase',
  'Responsive Design',
  'Accessibility',
  'Version Control',
  'Git/GitHub',
  'Testing & Debugging',
  'UI/UX',
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">My Portfolio</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><h4>Hello, I’m Tshiamo Mokete</h4></p>
            <h1>Building modern digital experiences with JavaScript.</h1>
            <p className="hero-description">
              I design and develop polished web applications that help brands stand out. Whether you're launching a product,
              improving engagement, or telling a story, I create intuitive interfaces and fast responsive experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View work
              </a>
              <a className="button secondary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <p className="hero-card-label">Featured skill</p>
              <h2>JavaScript-driven interfaces</h2>
              <p>
                Focused on component architecture, smooth animations, and accessible design for fast, maintainable and scalable websites.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-header">
            <span>01</span>
            <h2>About me</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                I’m a full-stack developer passionate about turning ideas into clean, engaging websites. I enjoy building
                user-first experiences that feel intuitive on every screen.
              </p>
              <p>
                My work blends visual design, strong performance, and accessibility so every visitor can explore content with
                confidence.
              </p>
            </div>
            <div className="about-panel">
              <img
                src="/images/profile.png"
                alt="Tshiamo Mokete"
                className="about-photo"
              />
              <div className="stats-grid">
                <div>
                  <strong>3+</strong>
                  <p>Years building web experiences</p>
                </div>
                <div>
                  <strong>5+</strong>
                  <p>Projects built</p>
                </div>
                <div>
                  <strong>100%</strong>
                  <p>Responsive across all devices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-header">
            <span>02</span>
            <h2>Selected projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-header">
            <span>03</span>
            <h2>Skills</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <span>04</span>
            <h2>Let’s work together</h2>
          </div>
          <p>
            I’m available for freelance and contract work. If you have a project idea or would like to collaborate,
            send me a message and let’s make it happen.
          </p>
          <a className="button primary contact-button" href="mailto:tshiamomokete5@gmail.com">
            tshiamomokete5@gmail.com
          </a>
          <div className="social-links">
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/tshiamo-mokete-b8b87b2a5"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="button secondary"
              href="https://github.com/Tshiamo0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button secondary"
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
