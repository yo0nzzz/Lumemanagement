import modelHome from '../assets/modelhome.png'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero" aria-label="Lume Management">
        <div className="home-hero__banner" aria-hidden="true" />
        <img className="home-hero__model" src={modelHome} alt="Modelo Lume Management" />
      </section>
      <section className="home-tagline" id="about">
        <h1>ILLUMINATING TALENT. CRAFTING CAREERS.</h1>
      </section>
    </div>
  )
}
