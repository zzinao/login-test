import './App.css'
import Login from './login/Login'
import Signup from './login/Signup'
import KakaoLogin from './login/KakaoLogin'
import { history } from './redux/configureStore'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/kakaoLogin" exact component={KakaoLogin} />
      </ConnectedRouter>
    </>
  )
}

export default App
