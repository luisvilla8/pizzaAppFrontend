import axios from 'axios';

export const getAllUsuarios = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/v1/usuarios")
  return response.data.data;
}