import axios from 'axios'
import { produce } from 'immer'
import { createAction, handleActions } from 'redux-actions'

//initialState
const initialState = {
  userId: '',
}

//kakao login
const kakaoLogin = (code) => {
  return async function (dispatch, getState, { history }) {
    console.log(code)
    await axios
      .get(`http://3.36.75.6/user/kakaoLogin?code=${code}`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log('에러에러', err)
      })
  }
}

export default handleActions({}, initialState)

const actionCreators = {
  kakaoLogin,
}
export { actionCreators }
