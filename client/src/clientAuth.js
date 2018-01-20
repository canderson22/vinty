import axios from 'axios'
import jwtDecode from 'jwt-decode'

const clientAuth = axios.create()
clientAuth.defaults.headers.common.token = getToken()

function getToken() {
    return localStorage.getItem('token')
}

function setToken(token) {
    localStorage.setItem('token', token)
    return token
}

function getCurrentUser() {
     const token = getToken()
     if(token) return jwtDecode(token)
     return null
}

function logIn(credentials) {
    return clientAuth({
        method: 'post',
        url: '/api/users/authenticate',
        data: credentials
    })
      .then((res) => {
          const token = res.data.token
          if(token) {
              clientAuth.defaults.headers.common.token = setToken(token)
              return jwtDecode(token)
          } else {
              return false
          }
      })
}

function signUp(userInfo) {
    userInfo.admin = false
	return clientAuth({ method: 'post', url: '/api/users', data: userInfo})
		.then(res => {
//then store the return token if there is one
			const token = res.data.token
			if(token) {
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

function logOut() {
    localStorage.removeItem('token')
    delete clientAuth.defaults.headers.common.token
    return true
}

// get all media content

function getMedia() {
    return clientAuth({
        method: 'get',
        url: '/api/media'
    })
    .then(res => res.data)
    .then(media => {
        return media
    })
}

export default {
    getCurrentUser,
    logIn,
    logOut,
    signUp,
    getMedia
}
