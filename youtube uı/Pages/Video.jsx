import React from 'react'
import styled from 'styled-components'
import "../Components/Icon"
import Icon from '../Components/Icon';
import Comments from '../Components/Comments';
import pic from "../img/logo192.png"
import Card from '../Components/Card';

const Container=styled.div`
display: flex;
gap: 24px;
`;
const Content=styled.div`
flex: 5;
`;
const Recommendation=styled.div`
flex: 2;
`;
const VideoWrapper=styled.div`

`;
const Title=styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 20px;
color:${({theme}) => theme.text}
`;
const Details=styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;
const Info=styled.span`
color:${({theme}) => theme.textSoft}

`;
const Buttons=styled.div`
display: flex;
gap: 20px;
color:${({theme}) => theme.text}

`;
const Button=styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;
const Hr=styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`
const Channel=styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo=styled.div`
display: flex;
gap: 20px;
`;

const Subscripe=styled.button`
background-color:#cc1a00;
font-weight: 500;
color: whitesmoke;
border: none;
border-bottom: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const Image=styled.img`
height: 50px;
border-radius: 50%;
`;

const ChannelDetail=styled.div`
display: flex;
flex-direction: column;
color:${({theme}) => theme.text}


`;

const ChannelName=styled.span`
font-weight: 500;
`;

const ChannelCounter=styled.span`
margin-top: 5px;
color:${({theme}) => theme.textSoft};
font-size: 12px;
`;

const Description=styled.p`
font-style: 14px;

`;


const Video = () => {
  return (
    <Container>
      <Content>
       <VideoWrapper>
       <iframe 
       height={400}
       width="100%"
       src="" frameborder="1"></iframe>
      
       </VideoWrapper>
       <Title>AAAA</Title>
       <Content></Content>
       
       <Details>
        <Info>123,3333 view</Info>
        <Buttons>
          <Button>
            <Icon/>like
          </Button>
          <Button>
            <Icon/>dislike
          </Button>
          <Button>
            <Icon/>share
          </Button>
        </Buttons>
       </Details>
       <Hr/>
       <Channel>
        <ChannelInfo>
         <Image src={pic}/>
         <ChannelDetail>
          <ChannelName>Reactube</ChannelName>
          <ChannelCounter>200k sub</ChannelCounter>
          <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
           Aperiam vitae voluptatibus accusantium praesentium sed provident fuga mollitia, incidunt blanditiis earum. 
           Provident ea consequatur itaque fugit, quis neque nobis cupiditate ullam.
          </Description>
         </ChannelDetail>
        </ChannelInfo>
        <Subscripe>SUBSCRİPE</Subscripe>
       </Channel>
       <Comments/>
      </Content>
      
      <Recommendation>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video