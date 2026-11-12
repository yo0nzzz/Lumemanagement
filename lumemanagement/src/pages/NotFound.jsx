import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
      <p>Página não encontrada.</p>
      <Link to="/" className="btn btn-primary">
        Voltar para a Home
      </Link>
    </section>
  )
}
