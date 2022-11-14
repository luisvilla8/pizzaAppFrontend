import { useRef } from 'react'
import { Distritos } from '../../mock-data'
import { validateIsEmpty, validateIsOnlyString, validateNumberDigits } from '../../utils'
import { MenuButton } from '../shared/MenuButton/MenuButton'
import { PizzaBg } from '../shared/PizzaBg'
import style from './SalesForm.module.css'

export const SalesForm = ({ isOpen = false, handleToggle }) => {

  const distritoElement = useRef();
  const telefonoElement = useRef();
  const nombreElement = useRef();

  const handleSubmit = () => {
    const isValidDistrito = !validateIsEmpty(distritoElement.current.value);
    const isValidTelefono = validateNumberDigits(telefonoElement.current.value, 9);
    const isValidNombre = validateIsOnlyString(nombreElement.current.value);

    if(isValidDistrito && isValidTelefono && isValidNombre){
      return alert('Pedido realizado con éxito')
    }
    return alert('Datos incorrectos')
  }

  return (
    <div className={style.bg} isopen={isOpen.toString()}>
      <div className={style.container}>
        <header>
          <h2>Termina tu compra!</h2>
          <MenuButton isActive="active" handleChange={handleToggle}/>
        </header>
        <p className={style.paragraph}>
          Ya estás a punto. Completa tus datos y termina tu compra!
        </p>
        <main>
          <div className={style.input__group}>
            <label htmlFor="distrito">Distrito</label>
            <select name="distrito" id="distrito" ref={distritoElement}>
              {Distritos.map((distrito) => (
                <option value={distrito.id} key={distrito.id}>{distrito.nombre}</option>
              ))}
            </select>
          </div>
          <div className={style.input__group}>
            <label htmlFor="telefono">Telefono</label>
            <input 
              type="number" 
              name="telefono" 
              id="telefono" 
              placeholder="Ingresa tu telefono"
              ref={telefonoElement}
            />
          </div>
          <div className={style.input__group}>
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              id="nombre" 
              placeholder="Escribe tu nombre ..."
              ref={nombreElement}
            />
          </div>
          <button 
            className={style.btnComprar}
            onClick={ handleSubmit }
          >REALIZAR COMPRA</button>
        </main>
        <PizzaBg qty={1} />
      </div>
    </div>
  );
}
