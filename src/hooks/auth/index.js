import axios from 'axios'
import React, { createContext, useCallback, useState, useContext } from 'react'

export const AuthContext = createContext({})

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@W2W:token')

    return { token }
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await axios.post('http://localhost:3333/auth/signin', {
      email,
      password,
    })
    
    const { access_token } = response.data
    localStorage.setItem('@W2W:token', access_token)
    axios.defaults.headers.authorization = `Bearer ${access_token}`

    setData({ token: access_token })
  }, [])

  const logOut = useCallback(() => {
    localStorage.removeItem('@W2W:token')

    setData({})
  }, [])

  return (
    <AuthContext.Provider
      value={{ token: data.token, signIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}