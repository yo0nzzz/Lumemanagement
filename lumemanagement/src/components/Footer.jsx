import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <strong>
            Lume<span>management</span>
          </strong>
          <p>Uma base simples e funcional para começar o seu projeto.</p>
        </div>

        <nav className="footer__links" aria-label="Links do rodapé">
          <h4>Navegação</h4>
          <Link to="/">Home</Link>
          <Link to="/login">Entrar</Link>
          <Link to="/cadastro">Cadastre-se</Link>
        </nav>

        <div className="footer__links">
          <h4>Contato</h4>
          <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
          <span>São Paulo, Brasil</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <small>© {ano} Lumemanagement. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  )
}
