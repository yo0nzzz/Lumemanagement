import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

const estadoInicial = {
  nome: '',
  email: '',
  senha: '',
  confirmarSenha: '',
}

export default function Cadastro() {
  const [form, setForm] = useState(estadoInicial)
  const [erros, setErros] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validar = () => {
    const novos = {}

    if (!form.nome.trim()) novos.nome = 'Informe seu nome.'

    if (!form.email.trim()) novos.email = 'Informe seu e-mail.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      novos.email = 'E-mail inválido.'

    if (form.senha.length < 6)
      novos.senha = 'A senha deve ter ao menos 6 caracteres.'

    if (form.confirmarSenha !== form.senha)
      novos.confirmarSenha = 'As senhas não coincidem.'

    return novos
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const novos = validar()
    setErros(novos)

    if (Object.keys(novos).length > 0) return

    // TODO: troque por uma chamada real à sua API
    console.log('Cadastro:', form)
    alert('Cadastro enviado! (conecte aqui a sua API)')
    setForm(estadoInicial)
  }

  return (
    <section className="auth">
      <div className="auth__card">
        <h1>Criar conta</h1>
        <p className="auth__sub">Leva menos de um minuto.</p>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome"
              autoComplete="name"
              value={form.nome}
              onChange={handleChange}
            />
            {erros.nome && <span className="field__erro">{erros.nome}</span>}
          </div>

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
            {erros.email && <span className="field__erro">{erros.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              placeholder="Mínimo de 6 caracteres"
              autoComplete="new-password"
              value={form.senha}
              onChange={handleChange}
            />
            {erros.senha && <span className="field__erro">{erros.senha}</span>}
          </div>

          <div className="field">
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              id="confirmarSenha"
              name="confirmarSenha"
              type="password"
              placeholder="Repita a senha"
              autoComplete="new-password"
              value={form.confirmarSenha}
              onChange={handleChange}
            />
            {erros.confirmarSenha && (
              <span className="field__erro">{erros.confirmarSenha}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </form>

        <p className="auth__rodape">
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </section>
  )
}
