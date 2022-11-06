import React from 'react'
import { Link } from 'react-router-dom'
import { PizzaBg } from '../../components'
import style from './Login.module.css'

export const Login = () => {
  return (
    <div>
      <h1 className={style.login__title}>Fetuccini</h1>
      <p className={style.login_paragraph}>Si, SE PUEDE AMAR AUN MAS LA PIZZA</p>
      <section className={style.modal__container}>
        <h2 className={style.modal__title}>Logueate !</h2>
        <p className={style.modal__paragraph}>Bienvenido(a) !. Por favor ingresa tus credenciales para iniciar sesión</p>
        <div className={style.modal__form}>
          <div className={style.input__container}>
            <label htmlFor="email" className={style.label}>Correo</label>
            <input type="text" name="email" id="email" className={style.input} placeholder="Ingrese su correo"/>
          </div>
          <div className={style.input__container}>
            <label htmlFor="password" className={style.label}>Contraseña</label>
            <input type="password" name="password" id="password" className={style.input} placeholder="Ingrese su contraseña"/>
          </div>
          <button className={style.button__submit}>Iniciar Sesión</button>
        </div>
        <span className={style.option__link}>
          No tienes cuenta? 
          <Link to='signUp'> Registrate aquí</Link>        
        </span>
        <span className={style.option__link}>
          Olvidaste tu contraseña? 
          <Link to='recover'> Recuperala aquí</Link>
        </span>
      </section>
      <PizzaBg qty={20}/>
    </div>
  )
}
