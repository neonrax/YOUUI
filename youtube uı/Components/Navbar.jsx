import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Container=styled.div`
 background-color:${({theme}) => theme.bg};
 position: sticky;
 top: 0;
 height: 56px;
`;
const Wrapper=styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-end;
 position: relative;
 height: 100%;
 padding: 0px 20px;
 border: 1px solid #ccc;

`;
const Search=styled.div`
position: absolute;
width: 40%;
left: 0px;
right: 4rem;
margin: auto;
display: flex;
align-items: center;
padding: 5px;
justify-content: space-between;
border: 1px solid #ccc;
border-radius: 3px;
&:hover{
  border: 1px solid #202;

}
`;
const Input=styled.input`
right: auto;
border: none;
width: 100vw;
background-color: transparent;
outline: none;

`
;

const Button=styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
cursor: pointer;
border-radius: 3px;
font-weight: 500;
display: flex;
align-items: center;
gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
       <Search>
        <Input placeholder='Search'></Input>
        <Icon/>
       </Search>
       <Button>Sign in</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
