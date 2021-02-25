import qs from "qs"
import * as auth from 'auth_provider'
import { useAuth } from "context/auth-context"
const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  data?: object,
  token?: string
}
//封装fetch
export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config={}) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : ''
    },
    //传入的时候时对象，这里将分解出来了
    ...customConfig
  }
//data 分别在get和post中的格式
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    config.body = JSON.stringify(data)
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      await auth.logout()
      window.location.reload()
      return Promise.reject('message:请重新登录')
    }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export const useHttp = ()=>{
  const {user} = useAuth()
  return (...[endpoint,config]:Parameters<typeof http>)=>http(endpoint,{...config,token:user?.token})
}

