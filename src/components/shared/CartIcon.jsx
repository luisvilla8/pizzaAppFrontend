import style from './CartIcon.module.css'

export const CartIcon = ({ color = "#EEEEEE", text = "", onClick }) => {
    return(
        <div className={style.container} onClick={onClick}>
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 6H18.79C19.0694 6.00001 19.3457 6.05857 19.6011 6.17191C19.8565 6.28524 20.0854 6.45083 20.2729 6.65801C20.4603 6.86519 20.6023 7.10936 20.6897 7.37478C20.777 7.64019 20.8078 7.92097 20.78 8.199L20.18 14.199C20.1307 14.6925 19.8997 15.1501 19.532 15.4829C19.1642 15.8157 18.686 16 18.19 16H8.64C8.17747 16.0002 7.72918 15.84 7.37144 15.5469C7.01371 15.2537 6.76866 14.8456 6.678 14.392L5 6Z" stroke={color} strokeWidth="3" strokeLinejoin="round" />
                <path d="M5 6L4.19 2.757C4.13583 2.54075 4.01095 2.34881 3.83521 2.21166C3.65946 2.0745 3.44293 2.00001 3.22 2H2M8 20H10M16 20H18" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            { text !== "" && <span className={style.extra}>{text}</span>}
        </div>
    );
}