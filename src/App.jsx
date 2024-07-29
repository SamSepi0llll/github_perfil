import { useState } from 'react'
import Perfil from './components/Perfil'
import ReposList from './components/ReposList'

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
        <div className="container-input">
          <h1 className='title' >Digite seu nome de usuário do GitHub:</h1>
        <input type='text' className='input' onBlur={(evento) => setNomeUsuario(evento.target.value)}/>
        </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
