import React from 'react'

const Login = () => {
  //kakao
  const REST_API_KEY = '6c9c16d27b420108ed23421696dfba3b'
  const REDIRECT_URI = 'http://localhost:3000/user/kakaoLogin'
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

  return (
    <>
      <button>
        <a href={KAKAO_AUTH_URL}>카카오로 로그인</a>
      </button>
    </>
  )
}

export default Login
