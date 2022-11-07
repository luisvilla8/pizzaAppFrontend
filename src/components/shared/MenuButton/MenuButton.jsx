import { useState } from 'react';
import style from './MenuButton.module.css'

export const MenuButton = ({ handleChange, isActive = "" }) => {

    

    return(
        <button onClick={ handleChange } className={style.btn} active={isActive}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
}