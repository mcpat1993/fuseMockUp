import React from 'react';
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  border: none;
  border-radius: 0px;
  background: transparent;
  border: none;
  color: grey;
  font-size: 15px;
  width: 95%;
  margin-right: 100px;
`


class UserNote extends React.Component {
  constructor(props){
      super(props);
        this.state={
            usernote:props.usernote,
        }
  }


  render() {
    return (
        <Input type="text" 
              name="userNoteText" 
              placeholder="Add notes..." 
              defaultValue={this.props.usernote} />
    );
  }
}

export default UserNote