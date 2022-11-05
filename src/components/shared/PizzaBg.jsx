import React, { useState } from 'react'
import { getArrayFromNumber } from '../../utils';
import { PizzaBgItem } from './PizzaBgItem';
import style from '../../styles/PizzaBg.module.css'

export const PizzaBg = (qty = 0) => {
  const [qtyPizza, setQtyPizza] = useState(getArrayFromNumber(qty));
  return (
    <div className={style.container}>
      {qtyPizza.map((item, index) => (<PizzaBgItem key={index}/>))}
    </div>
  )
}
