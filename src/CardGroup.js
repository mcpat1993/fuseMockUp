import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Card from './Card';



const StyledButton = styled(Button)`
  float: left;
  border-radius: 5px;
  margin-top: 3px;
`


class CardGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.state={
            expanded:false,
        }
    }

    handleMouseClick() {
      this.setState(this.toggleClickState);
    }

    toggleClickState(state) {
      return {
        expanded: !this.state.expanded,
      };
    }

    //This function will create a parent card and button ready to toggle the drop
    //down of children cards
    renderParentCard() {
      return (
        <div style={{marginTop:  `0`}}>
          <StyledButton variant="contained" 
            size="small"
            onClick={this.handleMouseClick}> > ______  
          </StyledButton>
          <Card 
              title={this.props.parent.title}
              usernote={this.props.parent.userNote}
              background={this.props.parent.content.screenshot}
              hasbutton="0"
              url={this.props.parent.content.url}
              contenttext={this.props.parent.content.text}
          />
        </div>
        )
    }

    //This function loops through the children and creates one card for each.
    renderChildCards() {
      if (this.state.expanded) {
        const children = []
        for (const value of this.props.children) {
          children.push(
            <Card key={value.id}
              usernote={value.userNote}
              background={value.content.screenshot ? value.content.screenshot : value.content.text}
              indented="40"
              hasbutton="0"
              url={value.content.url}
              contenttext={value.content.text}
            />
          )
        }
        return (
         children
        );
      }else {
        return null;
      }
    }
    
    render(){
        return(
            <div>
              {this.renderParentCard()}
              {this.renderChildCards()}
            </div>
        )
    }
}

export default CardGroup