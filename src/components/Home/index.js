import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLogged: false}

  logged = () => {
    const {isLogged} = this.state
    if (isLogged === true) {
      this.setState({isLogged: false})
    } else {
      this.setState({isLogged: true})
    }
  }

  render() {
    const {isLogged} = this.state
    const isLogin = isLogged ? 'Welcome User' : 'Please Login'
    return (
      <div className="bg-container">
        <div className="bg-image">
          <Message message={isLogin} />
          {isLogged ? (
            <Logout logoutButton="Logout" logout={this.logged} />
          ) : (
            <Login loginButton="Login" login={this.logged} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
