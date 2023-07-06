import React from 'react'
import styled from 'styled-components'
import pic from "../img/logo192.png"
import Icon from "./Icon"
import { Link } from 'react-router-dom'



const Container=styled.div`
 flex: 1;
 background-color:${({theme}) => theme.bg};
 height: 100vh;
 color: ${({theme}) => theme.text};
 font-size: 14px;
 position: sticky;
 top: 0;
`
const Wrapper=styled.div`
 padding: 18px 26px;
`
const Logo=styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight: bold;
 margin-bottom: 25px;
`
const Img=styled.img`
 height: 25px;
`
const Item=styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 cursor: pointer;
 margin: 20px 0px;
 &:hover{
  background-color: #717171;
 }
`

const Hr=styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`

const Login=styled.div`
`

const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
`

export  const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none" , color:'inherit'}}>
      
     
       <Logo>
        <Img src={pic}/>
        reactube
       </Logo> </Link>
       <Hr/>
      
       <Item>
       <Icon/>Explore
       </Item>
       
       <Item>
       <Icon/>Subscripe
       </Item>
     
       <Item onClick={()=>setDarkMode(!darkMode)}>
       <Icon />{darkMode ? "Light" : "Dark"} Mode
       </Item>
       <Hr/>

       <Login>
        Sign in for videos
        <Button>SIGN IN </Button>
       </Login>

      </Wrapper>
      </Container>
  )
}

export default Menu;
