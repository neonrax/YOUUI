import React from 'react'
import styled from 'styled-components'
import pic from "../img/logo192.png"
import Comment from '../Components/Comment'


const Container=styled.div``;

const NewComment=styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Avatar=styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Input=styled.input`
border: none;
border-bottom: 1px;
background-color: transparent;
outline: none;
padding: 1px;
width:100%;


`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
          <Avatar src={pic}/>
          <Input placeholder='Add Commnet...'/>
  
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>

    </Container>
  )
}

export default Comments