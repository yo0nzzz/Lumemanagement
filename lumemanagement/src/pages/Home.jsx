import { Link } from 'react-router-dom'
import './Home.css'

const destaques = [
  {
    titulo: 'Rápido',
    texto: 'Construído com Vite, para um desenvolvimento ágil e builds leves.',
  },
  {
    titulo: 'Simples',
    texto: 'Estrutura enxuta e organizada, fácil de entender e de evoluir.',
  },
  {
    titulo: 'Pronto para crescer',
    texto: 'Rotas, layout e páginas básicas já configurados para você.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__eyebrow">Bem-vindo</p>
          <h1>
            Comece seu projeto
            <br />
            com uma base sólida.
          </h1>
          <p className="hero__texto">
            Uma estrutura simples em React com tudo o que você precisa para
            começar: navegação, páginas de login e cadastro e um visual limpo.
          </p>
          <div className="hero__acoes">
            <Link to="/cadastro" className="btn btn-primary">
              Criar conta
            </Link>
            <Link to="/login" className="btn btn-outline">
              Já tenho conta
            </Link>
          </div>
        </div>
      </section>

      <section className="destaques">
        <div className="container">
          <h2>Por que usar esta base?</h2>
          <div className="destaques__grid">
            {destaques.map((item) => (
              <article key={item.titulo} className="card">
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
