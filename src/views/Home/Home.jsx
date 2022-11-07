import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuButton, Nav, Title } from "../../components";
import style from './Home.module.css'

export const Home = () => {

    const [isActive, setIsActive] = useState("");

    const handleChange = () => {
        const newIsActive = isActive === "active" ? "" : "active";
        setIsActive(newIsActive);
    }

    return(
        <>
            <div className={style.header}>
                <Title>Fetuccini</Title>
                <MenuButton handleChange={handleChange} isActive={isActive}/>
                <Nav isActive={isActive}>
                    <Link to='register'>Llámanos</Link>
                    <Link to='register'>Whatsapp</Link>
                    <Link to='register'>Registrate</Link>
                    <Link to='/login'>Iniciar sesión</Link>
                </Nav>
            </div>
            <input type="text" name="search" id="search" placeholder="Qué producto buscas?" className={style.input__search}/>
        </>
    );
}