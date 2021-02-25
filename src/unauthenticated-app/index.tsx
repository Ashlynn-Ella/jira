import React, { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"

//非登录中的界面，同时可以切换登录和注册
export const UnanthenticatedAPP = () => {
  const [isRegister, setRegister] = useState(false)
  return <div>
    {isRegister ? <RegisterScreen /> : <LoginScreen />}
    <button onClick={()=>setRegister(!isRegister)}>切换到{isRegister ? "登录" : "注册"}</button>
  </div>
}