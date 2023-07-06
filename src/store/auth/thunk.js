import * as authActions from './actions'
import AuthService from '../../services/auth'

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await AuthService.login(email, password)
      console.log('data', data)
      localStorage.setItem('token', data.accessToken)
      dispatch(authActions.loginSuccess(data.userDto))
    } catch (e) {
      console.log(e)
      dispatch(authActions.loginFailed())
    }
  }
}