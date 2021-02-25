import React, { ReactNode } from "react"
import { AuthProvider } from "./auth-context"

//包裹app中的provider
export const AppProvider = ({children}:{children:ReactNode}) =>{
  return <AuthProvider>{children}</AuthProvider>
}