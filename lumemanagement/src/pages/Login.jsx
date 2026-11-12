import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' })
  const [erro, setErro] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErro('')

    if (!form.email || !form.senha) {
      setErro('Preencha e-mail e senha.')
      return
    }

    // TODO: troque por uma chamada real à sua API
    console.log('Login:', form)
    alert('Login enviado! (conecte aqui a sua API)')
  }

  return (
    <section className="auth">
      <div className="auth__card">
        <h1>Entrar</h1>
        <p className="auth__sub">Acesse sua conta para continuar.</p>

        <form className="form" onSubmit={handleSubmit} noValidate>
          {erro && <div className="form__erro">{erro}</div>}

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="voce@email.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Sua senha"
              autoComplete="current-password"
              value={form.senha}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
        </form>

        <p className="auth__rodape">
          Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </section>
  )
}
