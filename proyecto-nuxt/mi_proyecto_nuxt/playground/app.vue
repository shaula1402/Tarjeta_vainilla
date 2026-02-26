<template>
  <div :class="['cv-container', { dark: isDark }]">

    <header>
      <div class="header-info">
        <h1>Diaz Shaula Ludwika</h1>
        <h3>Puesto Ocupado / Buscado</h3>

          <div class="header-photo">
    <img src="/proyecto-nuxt/mi_proyecto_nuxt/playground/public/favicon.ico" alt="perfil">
  </div>

        <p class="bio">
          Soy un profesional apasionado por la optimización de procesos administrativos y el cumplimiento de metas institucionales,
          garantizando siempre la transparencia y la legalidad en la gestión tributaria.
        </p>

        <div class="contact-bar">
          <span>📞 +52 5614 7397 15</span>
          <span>✉️ diazshaula@gmail.com</span>
          <span>📍 EDOMEX, México</span>
        </div>
      </div>

      <div class="header-photo">
        <img src="@/assets/perfil.jpeg" alt="Foto de perfil">
      </div>
    </header>

    <section class="programs-bar">
      <h2>PROGRAMAS</h2>

      <div class="skills-grid">
        <div class="skill"><span>Excel</span> <span class="dots">●●●●○</span></div>
        <div class="skill"><span>PowerPoint</span> <span class="dots">●●●●○</span></div>
        <div class="skill"><span>Word</span> <span class="dots">●●●○○</span></div>
        <div class="skill"><span>Photoshop</span> <span class="dots">●●●●○</span></div>
        <div class="skill"><span>Access</span> <span class="dots">●●●○○</span></div>
        <div class="skill"><span>Visual StudioCode</span> <span class="dots">●●○○○</span></div>
      </div>
    </section>

    <main>
      <section class="main-left">
        <h2>EXPERIENCIA PROFESIONAL</h2>

        <div class="job">
          <div class="job-meta">
            De 16/05/2025 a Actualidad <br>
            CDMX, México
          </div>

          <div class="job-details">
            <p class="company">SAT</p>
            <p class="role">Enlace</p>
            <p>
              Responsable de la gestión, seguimiento y control de procesos administrativos y fiscales,
              asegurando el cumplimiento de las metas institucionales y la correcta aplicación de la normatividad vigente.
            </p>
          </div>
        </div>

        <h2>REFERENCIAS</h2>

        <div class="references">
          <div>
            <strong>Raul Nagera Nava</strong><br>
            Empresa SAT | Cargo Jefe de Departamento<br>
            Tel: 5566 8832 52<br>
            raulnava@gmail.com
          </div>

          <div>
            <strong>Sara Lopez Luna</strong><br>
            Empresa IMP | Cargo Subgerente<br>
            Tel: 5589 5712 07<br>
            lolo07@gmail.com
          </div>
        </div>
      </section>

      <aside class="sidebar">
        <section>
          <h2>IDIOMAS</h2>
          <p>Español: Natal</p>
          <p>Inglés: Intermedio</p>
        </section>

        <section>
          <h2>ESTUDIOS</h2>
          <div class="study-item">
            <p class="year">2021</p>
            <p>
              <strong>Título</strong><br>
              Universidad Tecnológico Gustavo A. Madero<br>
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

    <!-- Interruptor -->
    <div class="theme-switch-wrapper">
      <label class="theme-switch">
        <input type="checkbox" v-model="isDark">
        <div class="slider round"></div>
      </label>
    </div>

    <footer>
      <p>© 2026 - Proyecto personal</p>
    </footer>

  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      darkMode: false
    }
  },

  mounted() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      this.darkMode = true
    }
  },

  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      localStorage.setItem('theme', this.darkMode ? 'dark' : 'light')
    }
  }
}
</script>

<style>
@import "./app/css/main.css";
</style>