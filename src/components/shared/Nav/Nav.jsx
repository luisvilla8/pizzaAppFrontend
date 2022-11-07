import style from './Nav.module.css'

export const Nav = ({ isActive = "", children }) => {
    return(
        <div className={style.container} active={isActive}>
            {children}
        </div>
    );
};