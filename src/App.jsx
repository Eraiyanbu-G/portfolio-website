import SiteNav from './components/SiteNav.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './sections/HeroSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'

function App() {
  return (
    <div className="site-shell">
      <SiteNav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
