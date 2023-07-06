import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import pic from "../img/logo512.png"

const Container=styled.div`
width: ${(props)=>props.type !=="sm" && "360px"};
margin-bottom: ${(props)=>props.type ==="sm" ? "10px" : "45px"};;
cursor: pointer;
display: ${(props)=>props.type ==="sm" && "flex"};
gap: 10px;
`

const Image=styled.img`
width: 250px;
height: ${(props)=>props.type !=="sm"  ? "120px" : "122px"};
background-color: #999;
`
const Details=styled.div`
display: flex;
margin-top: ${(props)=>props.type !=="sm"  && "16px"};;;
gap: 13px;
`

const ChannelImage=styled.img`
width: 36px;
height: 36px;
border-radius:50% ;
background-color: #999;
display: ${(props)=>props.type ==="sm" && "none"};
`
const Texts=styled.div``;

const Title=styled.h1`
font-size: 18px;
font-weight: 100;
color: ${({ theme }) => theme.text};

`;
const ChannelName=styled.h2`
font-size: 14px;
font-weight: 400;
color: ${({ theme }) => theme.textShoft};
margin: 10px 0px;

`;
const Info=styled.div``;

const Card = ({type}) => {
  return (
   
    <Link to="/video/test" style={{textDecoration:"none" , color: "inherit"}}>
    <Container type={type}>
      <Image type={type} src={pic}/>
      <Details type={type}>
        <ChannelImage type={type}src={pic}/>
        <Texts>
          <Title>Test vide</Title>
          <ChannelName>React</ChannelName>
          <Info>660,000 views . 1day</Info>
        </Texts>
        </Details>
      
    </Container>    
    </Link>
  );
};

export default Card