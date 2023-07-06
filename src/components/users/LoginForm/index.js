import React, { FC, useState } from 'react'

const LoginForm = ({ loginRequest }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login-form">
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="password"
      />
      <button
        onClick={() => loginRequest(email, password)}
      >Login</button>
      <button>Register</button>
    </div>
  )
}

export default LoginForm