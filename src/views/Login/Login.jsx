import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PizzaBg } from '../../components'
import { useAuthContext } from '../../context'
import { authUser } from '../../services'
import style from './Login.module.css'

export const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }

  const navigate = useNavigate();
  const { handleAddUser } = useAuthContext();

  const handleSubmit = async () => {
    const { email, password } = form;
    const isAuth = await authUser(email, password);
    if(isAuth) {
      handleAddUser(isAuth);
      navigate("/home")
    }
  }

  return (
    <div>
      <h1 className={style.login__title}>Fetuccini</h1>
      <p className={style.login_paragraph}>Si, SE PUEDE AMAR AUN MAS LA PIZZA</p>
      <div className={style.modal__bg}>
        <section className={style.modal__container}>
          <h2 className={style.modal__title}>Logueate !</h2>
          <p className={style.modal__paragraph}>Bienvenido(a) !. Por favor ingresa tus credenciales para iniciar sesión</p>
          <div className={style.modal__form}>
            <div className={style.input__container}>
              <label htmlFor="email" className={style.label}>Correo</label>
              <input type="text" name="email" id="email" className={style.input} 
              placeholder="Ingrese su correo"
              onInput={ handleChange }/>
            </div>
            <div className={style.input__container}>
              <label htmlFor="password" className={style.label}>Contraseña</label>
              <input type="password" name="password" id="password" className={style.input} placeholder="Ingrese su contraseña"
              onInput={ handleChange }/>
            </div>
            <button 
              className={style.button__submit}
              onClick={ handleSubmit }
            >Iniciar Sesión</button>
          </div>
          <span className={style.option__link}>
            No tienes cuenta? 
            <Link to='/sign-up'> Registrate aquí</Link>        
          </span>
          <span className={style.option__link}>
            Olvidaste tu contraseña? 
            <Link to='recover'> Recuperala aquí</Link>
          </span>
        </section>
        <PizzaBg qty={10}/>
      </div>
    </div>
  )
}
