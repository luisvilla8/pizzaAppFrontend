import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllUsuarios } from './services'
import { Login, Home, SignUp } from './views';
import style from './styles/App.module.css'
import './styles/Global.module.css'
import { CartProvider } from './context/CartProvider';
import { AuthProvider } from './context';

function App() {

  const fetchData = async () => {
    const usuarios = await getAllUsuarios();
    console.log(usuarios);
  }

  return (
    <CartProvider>
      <AuthProvider>
        <div className={style.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        </div>
      </AuthProvider>
    </CartProvider>
  )
}

export default App
