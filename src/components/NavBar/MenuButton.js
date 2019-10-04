import React, { Component } from 'react';


export default class MenuButton extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
    this.setState({open:!this.state.open});
  }

  dynamicStyles() {
    const { color, open } = this.state;
    return {
        line: {
        height: '2px',
        width: '20px',
        background: color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: open ? 0: 1,
        transform: open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: open ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      }
    }
  }
  
  render(){
    const { onClick } = this.props;
    const dynamicStyles = this.dynamicStyles()
    return(
      <div
        style={styles.container} 
        onClick={onClick ? onClick: ()=> {this.handleClick();}}
      >
        <div style={{...dynamicStyles.line,...dynamicStyles.lineTop}}/>
        <div style={{...dynamicStyles.line,...dynamicStyles.lineMiddle}}/>
        <div style={{...dynamicStyles.line,...dynamicStyles.lineBottom}}/>
      </div>
    )
  }
}

const styles = {
  container: {
    height: '50px',
    width: '50px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '4px',
  }
}