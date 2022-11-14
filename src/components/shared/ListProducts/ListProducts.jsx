import style from "./ListProducts.module.css";

export const ListProducts = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  );
};
