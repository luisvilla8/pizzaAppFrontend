import axios from 'axios';
import { Users } from '../../mock-data';

const USE_MOCK_DATA = true;

export const getAllUsuarios = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/usuarios")
  return response.data.data;
}

export const authUser = async (email = "", password = "") => {
  let usuarios = [];

  if (USE_MOCK_DATA) {
    usuarios = Users;
  }else {
    usuarios = await getAllUsuarios();
  }

  const usuario = usuarios.find((usuario) => {
    return usuario.email === email && usuario.password === password;
  });

  return usuario;
}