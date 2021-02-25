import { useAuth } from "context/auth-context"
import React from "react"
import { ProgjectListScreen } from "screens/project-list"

//登录中的界面展示
export const AuthenticatedApp = ()=>{
  const {logout} = useAuth()
  return <div>
    <button onClick={logout}>登出</button>
    <ProgjectListScreen />
  </div>
}