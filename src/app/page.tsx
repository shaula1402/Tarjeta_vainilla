import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="cv-container">
        <header>
          <div className="header-info">
            <h1>Diaz Shaula Ludwika</h1>
            <h3>Puesto Ocupado / Buscado</h3>
            <p className="bio">
              Soy un profesional apasionado por la optimización de procesos administrativos y el cumplimiento de metas institucionales, garantizando siempre la transparencia y la legalidad en la gestión tributaria.
            </p>
            <div className="contact-bar">
              <span>📞 +52 5614 7397 15</span>
              <span>✉️ diazshaula@gmail.com</span>
              <span>📍 EDOMEX, México</span>
            </div>
          </div>
          <div className="header-photo">
            <img src="/ICO/perfil.jpeg" alt="Foto de perfil" />
          </div>
        </header>

        <section className="programs-bar">
          <h2>PROGRAMAS</h2>
          <div className="skills-grid">
            <div className="skill"><span>Excel</span> <span className="dots">●●●●○</span></div>
            <div className="skill"><span>PowerPoint</span> <span className="dots">●●●●○</span></div>
            <div className="skill"><span>Word</span> <span className="dots">●●●○○</span></div>
            <div className="skill"><span>Photoshop</span> <span className="dots">●●●●○</span></div>
            <div className="skill"><span>Access</span> <span className="dots">●●●○○</span></div>
            <div className="skill"><span>Visual StudioCode</span> <span className="dots">●●○○○</span></div>
          </div>
        </section>

        <main>
          <section className="main-left">
            <h2>EXPERIENCIA PROFESIONAL</h2>

            <div className="job">
              <div className="job-meta">
                De 16/05/2025 a Actualidad <br /> CDMX, México
              </div>
              <div className="job-details">
                <p className="company">SAT</p>
                <p className="role">Enlace</p>
                <p>
                  Responsable de la gestión, seguimiento y control de procesos administrativos y fiscales, asegurando el cumplimiento de las metas institucionales y la correcta aplicación de la normatividad vigente.
                </p>
              </div>
            </div>

            <h2>REFERENCIAS</h2>
            <div className="references">
              <div>
                <strong>Raul Nagera Nava</strong><br />
                Empresa SAT | Cargo Jefe de Departamento<br />
                Tel: 5566 8832 52<br />
                raulnava@gmail.com
              </div>

              <div>
                <strong>Sara Lopez Luna</strong><br />
                Empresa IMP | Cargo Subgerente<br />
                Tel: 5589 5712 07<br />
                lolo07@gmail.com
              </div>
            </div>
          </section>

          <aside className="sidebar">
            <section>
              <h2>IDIOMAS</h2>
              <p>Español: Natal</p>
              <p>Inglés: Intermedio</p>
            </section>

            <section>
              <h2>ESTUDIOS</h2>
              <div className="study-item">
                <p className="year">2021</p>
                <p>
                  <strong>Título</strong><br />
                  Universidad Tecnológico Gustavo A. Madero<br />
                  Gustavo A. Madero, México
                </p>
              </div>
            </section>

            <section>
              <h2>SOCIAL</h2>
              <p>🔗 shaula.com/in/chaula</p>
              <p>🐦 @shaula_twitter</p>
              <p>S shaula.skype</p>
            </section>
          </aside>
        </main>
      </div>

      <div className="theme-switch-wrapper">
        <label className="theme-switch">
          <ThemeToggle />
          <div className="slider round"></div>
        </label>
      </div>

      <footer>
        <p>© 2026 - Proyecto personal</p>
      </footer>
    </>
  );
}