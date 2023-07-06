import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as authActions from '../../store/auth/actions'
import LoginForm from '../../components/users/LoginForm'
import {loginThunk} from "../../store/auth/thunk";

class LoginPage extends Component {
  render() {
    const { loginRequest } = this.props
    return (
      <div className="login-page">
        <LoginForm loginRequest={loginRequest} />
      </div>
    )
  }
}

const mapStateToProps = {}
const mapDispatchToProps = {
  loginRequest: loginThunk,
}

export default compose(
  connect(null, mapDispatchToProps)
)(LoginPage)