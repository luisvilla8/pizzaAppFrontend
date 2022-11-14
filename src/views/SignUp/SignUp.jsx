import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PizzaBg } from '../../components'
import { authUser } from '../../services'
import style from './SignUp.module.css'

export const SignUp = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { email, password } = form;
    const isAuth = await authUser(email, password);
    if(isAuth) navigate("/home")
  }

  return (
    <div>
      <h1 className={style.login__title}>Fetuccini</h1>
      <p className={style.login_paragraph}>Si, SE PUEDE AMAR AUN MAS LA PIZZA</p>
      <div className={style.modal__bg}>
        <section className={style.modal__container}>
          <h2 className={style.modal__title}>Registrate !</h2>
          <p className={style.modal__paragraph}>Bienvenido(a) !. Por favor ingresa tus datos para crearte una cuenta</p>
          <div className={style.modal__form}>
            <div className={style.input__container}>
              <label htmlFor="nombre" className={style.label}>Nombre</label>
              <input type="text" name="nombre" id="nombre" className={style.input} 
              placeholder="Ingrese su nombre"
              onInput={ handleChange }/>
            </div>
            <div className={style.input__container}>
              <label htmlFor="telefono" className={style.label}>Telefono</label>
              <input type="number" name="telefono" id="telefono" className={style.input} 
              placeholder="Ingrese su telefono"
              onInput={ handleChange }/>
            </div>
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
            >Registrar Cuenta</button>
          </div>
          <span className={style.option__link}>
            Ya tienes cuenta? 
            <Link to='/login'> Logueate aquí</Link>        
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
