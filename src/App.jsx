import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllUsuarios } from './services'
import { Login } from './views/Login/Login';
import style from './styles/App.module.css'
import './styles/Global.module.css'

function App() {

  const fetchData = async () => {
    const usuarios = await getAllUsuarios();
    console.log(usuarios);
  }

  return (
    <div className={style.container}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
