import { User } from "screens/project-list/search-panel"

//该文件将token添加到localStorage中
const localStoregeKey = "_auth_provider_token_"

const apiUrl = process.env.REACT_APP_API_URL

//从localStorage中获取token
export const getToken = () => window.localStorage.getItem(localStoregeKey)

//将获取到的数据中的token放到localStorage中，并且返回数据
export const handleUserResponse = (user: User) => {
  window.localStorage.setItem(localStoregeKey, user.token || '')
  return user
}

//登录
export const login = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(async response => {
    if (response.ok) {
      let user = await response.json()
      return handleUserResponse(user.user)
    } else {
      return Promise.reject(data)
    }
  })
}

//注册
export const register = (data: { username: string, password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  }).then(async response => {
    if (response.ok) {
      return handleUserResponse(await response.json())
    } else {
      return Promise.reject(data)
    }
  })
}

//退出
export const logout = async () => {
  window.localStorage.removeItem(localStoregeKey)
}