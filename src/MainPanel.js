import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const StyledButton = styled(Button)`
  float: right;
  border-radius: 5px;
`

const Panel = styled.div`
  padding: 1px;
  background-size: cover;
  position: relative;
`

const Title = styled.h4`
  color: #fff;
  font-weight: 300;
  text-align: left;
  padding: 1px;
  padding-left: 5px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(255,255,255,1) 100%);
  margin-bottom: 0;
  margin-top: 15%;
`
function isUrl(s) {
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	return regexp.test(s);
}

class MainPanel extends React.Component {
  constructor(props) {
        super(props);
        this.state={
            title:props.title,
            background:props.background,
            hasbutton:props.hasbutton,
        }
        this.render =this.render.bind(this);
    }

    renderButton() {
    	if (this.props.hasbutton === "1"){
    		return (
				<StyledButton variant="contained" 
    				size="small"> > 
   			 	</StyledButton>);
    	}
    	return;
    }


    renderBackground() {
    	if (!isUrl(this.props.background)){
    		return (<h3 style={{ color: 'black' }}>{this.props.contenttext}</h3>);
    	}else{
    		return null;
    	}
    }


    render() {
    return (
      <Panel style={{backgroundImage: `url(${this.props.background})` }}>
      	{this.renderBackground()}
	  	{this.renderButton()}
        <Title>{this.props.title}</Title>
       	
      </Panel>
    );
  }
}

export default MainPanel