import { useState, createContext, useContext, useEffect } from 'react'

export const AuthContext = createContext({
  user: {},
  isLogged: false,
  handleAddUser: () => {},
  handleLogOut: () => {},
});

export const useAuthContext = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  
  const handleAddUser = ( user = {} ) => {
    setUser(user)
    setIsLogged(true)
  }

  const handleLogOut = () => {
    setUser({})
    setIsLogged(false)
  }

  return (
    <AuthContext.Provider value={
      {
        user,
        isLogged,
        handleAddUser,
        handleLogOut
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}
