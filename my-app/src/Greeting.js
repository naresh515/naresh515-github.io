import React from 'react';


export class Greeting extends React.Component {
  render() {
    return <h1>Greeting, {this.props.name}!</h1>;
  }
}

