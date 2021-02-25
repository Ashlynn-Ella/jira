import * as auth from "auth_provider"
import React, { ReactNode, useState } from "react"
import { User } from "screens/project-list/search-panel"
import { useMount } from "utils"
import { http } from "utils/http"

//此页面将登录，退出，注册的信息储存到context中
interface Form {
  username: string,
  password: string
}
const bootstrapUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const data = await http('me', { token })
    user = data.user
  }
  return user
}

//创建context对象
const AuthContext = React.createContext<{
  user: User | null,
  login: (form: Form) => Promise<void>,
  register: (form: Form) => Promise<void>
  logout: () => Promise<void>
} | undefined>(undefined)
AuthContext.displayName = "MyDisplayName"

//封装React.createContext()对象中的Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const login = (form: Form) => auth.login(form).then(setUser)
  const register = (form: Form) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))
  useMount(()=>{
    bootstrapUser().then(setUser)
  })
  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

//自定义hook 将useContext封装，出现不存在的情况报错   Provider中的value在context中
//封装使用时
export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用')
  }
  return context
}