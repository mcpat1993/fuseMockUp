import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
  border: 1px solid grey;
  margin: 20px;

`

const Panel = styled.div`
  border: 1px solid grey;
  background-size: cover;
  position: relative;
`

//const Title = styled.h2;
const Title = styled.h4`
  color: #fff;
  font-weight: 300;
  bottom: 0;
  text-align: left;
  padding-left: 5px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(255,255,255,1) 100%);
  margin: 0;
  margin-top: 15%;
`
const Date = styled.div;

const UserNote = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`




const Card = (props) => (
  <StyledContainer>
    <Panel style={{backgroundImage: `url(${props.background})` }}>
      <Title>{props.title}</Title>
    </Panel>
    <Panel>
      <UserNote>{props.usernote}</UserNote>
    </Panel>
  </StyledContainer>
)

export default Card