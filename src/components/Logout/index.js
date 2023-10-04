import './index.css'

const Logout = props => {
  const {logoutButton, logout} = props
  return (
    <button className="button" type="button" onClick={logout}>
      {logoutButton}
    </button>
  )
}

export default Logout
