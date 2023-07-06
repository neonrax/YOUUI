import React from 'react'
import styled from 'styled-components';
import pic from "../img/logo192.png"

const Container=styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;

`;

const Avatar=styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;


const Details=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({ theme }) => theme.text};
`;
const Name=styled.div`
font-size: 13px;
font-weight: 500;

`;
const Date=styled.div`
font-size: 10px;
font-weight: 400;
color: ${({ theme }) => theme.text};
margin-left: 5px;
`;
const Text=styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={pic}/>
      <Details>
        <Name>Example <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
      </Details>
    </Container>
  )
}

export default Comment