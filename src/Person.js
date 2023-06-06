import React from 'react';
import './Person.css';
import Button from 'react-bootstrap/Button';


class Person extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      waves: 0,
      helpMe: false
    }

  }

  // ** METHOD THAT WILL UPDATE STATE ON CLICK TRACK THE WAVES
  handleWave = () => {
    // react method that will allow me to change state -> takes in the obj rebuilds that into state
    this.setState({
      waves: this.state.waves + 1
    })
  }

  needsHelp = () => {
    this.setState({
      helpMe: true
    })
  }

  gotHelp = () => {
    this.setState({
      helpMe: false
    })
  }

  render(){
    console.log(this.props);
    return(
      <>
        <article>
          <h3>{this.props.firstName}</h3>
          <p>👋 {this.state.waves} Greetings </p>
          <p onClick={this.handleWave}>Say Hello!</p>
          <img src={this.props.imageURL} alt={this.props.firstName} />
          <Button variant="danger" onClick={this.needsHelp}>Help me!</Button>
          <Button onClick={this.gotHelp}>I got help!</Button>

          <div>{this.state.helpMe ? 'I NEED HELP!' : ''}</div>
       
        </article>
      </>
    )
  }
}

export default Person;