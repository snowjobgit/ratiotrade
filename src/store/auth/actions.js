export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload
})

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
})

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload
})

export const registerRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload
})

export const logoutRequest = (payload) => ({
  type: REGISTER_REQUEST,
  payload
})