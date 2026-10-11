
// import { useState, createContext } from 'react'
// import api from '../api/axios.js'

// function AuthProvider({ children }) {

// const login = async (email, password) => {
//   const res = await api.post('/auth/login', { email, password });
//   // res.data.token  ← التوكن
//   // res.data.user   ← بيانات المستخدم
// };


import { useState, createContext } from 'react'
import api from '../api/axios'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password })

    localStorage.setItem('token', res.data.token)
    setUser(res.data.user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}