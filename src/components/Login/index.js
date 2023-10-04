import './index.css'

const Login = props => {
  const {loginButton, login} = props
  return (
    <button className="button" type="button" onClick={login}>
      {loginButton}
    </button>
  )
}

export default Login
