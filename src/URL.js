import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
  margin: 0.5em;
  border-radius: 0px;
  background: transparent;
  border: none;
  color: grey;
  font-size: 15px;
  width: 95%;
`

//This component houses the url bar 
class URL extends React.Component {
  render() {
    return (
        <Input type="text" 
              name="URL" 
              value={this.props.url} />
    );
  }
}

export default URL