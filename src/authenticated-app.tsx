import { useAuth } from "context/auth-context"
import React from "react"
import { ProgjectListScreen } from "screens/project-list"
import styled from '@emotion/styled'

//登录中的界面展示
export const AuthenticatedApp = () => {
  const { logout } = useAuth()
  return <Container>
    <Header>
      <HeaderLeft>
        <h3>Logo</h3>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={logout}>登出</button>
      </HeaderRight>
    </Header>
    <Nav></Nav>
    <Main><ProgjectListScreen /></Main>
    <Aside></Aside>
    <Footer></Footer>
  </Container>
}
const Container = styled.div`
  display:grid;
  grid-template-rows:6rem 1fr 6rem; //相当于行高
  grid-template-columns:20rem 1fr 20rem;//列宽
  grid-template-areas:
  "header header header"
  "nav main asider"
  "footer footer footer";
  height:100vh;
  /* grid-gap:10px; */
`
const Header = styled.header`
  grid-area:header;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const HeaderLeft = styled.div`
  display:flex;
  align-items:center;
`
const HeaderRight = styled.div`
`

const Nav = styled.nav`
  grid-area:nav;
`
const Main = styled.main`
  grid-area:main;
`
const Aside = styled.aside`
  grid-area:aside;
`
const Footer = styled.footer`
  grid-area:footer;
`