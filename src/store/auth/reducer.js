import { initState } from './selectors'
import * as actions from './actions'

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.REGISTER_SUCCESS:
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      }
    }
    case actions.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuth: false,
        user: null,
      }
    }
    default:
      return state
  }
}