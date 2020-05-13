import React from 'react';
import styled from 'styled-components'
import UserNote from './UserNote';
import URL from './URL';
import MainPanel from './MainPanel';

const StyledContainer = styled.div`
  border-radius: 5px;
  margin: 20px;
  background: white;
`



class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseUnhover = this.handleMouseUnhover.bind(this);
        this.state={
            title:props.title,
            usernote:props.usernote,
            background:props.background,
            hasbutton:props.hasbutton,
            ishovering:false,
            url:props.url,
        }
    }

    handleMouseHover() {
      this.setState(this.toggleHoverState);
    }
    handleMouseUnhover() {
      this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
      return {
        ishovering: !this.state.ishovering,
      };
    }

    renderUserNote() {
      if (this.state.ishovering || this.state.usernote) {
        return (<UserNote usernote={this.props.usernote} className={"displayed"} />);
      }else {
        return;
      }
    }

    renderURL() {
      if (this.state.ishovering && this.props.url) {
        return (<URL url={this.props.url} className={"displayed"} />);
      }else {
        return;
      }
    }
    
    render(){
        return(
            <StyledContainer style={{marginLeft: `${this.props.indented}px` }}
                            onMouseEnter={this.handleMouseHover}
                            onMouseLeave={this.handleMouseUnhover}>
                  <MainPanel background={this.props.background}
                          title={this.props.title} 
                          hasbutton={this.props.hasbutton}
                          contenttext={this.props.contenttext}/>
                  {this.renderURL()}
                  {this.renderUserNote()}
            </StyledContainer>
        )
    }
}

export default Card