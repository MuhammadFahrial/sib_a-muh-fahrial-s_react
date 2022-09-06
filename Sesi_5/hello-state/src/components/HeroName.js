import React from "react";

class HeroName extends React.Component {
  render() {
    return (
      <>
        <h3>Hero Name</h3>
        <p>{this.props.name}</p>;
      </>
    );
  }
}

// class Hero extends React.Component {
//   render() {
//     return <HeroName name="Hercules" />;
//   }
// }

class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Gatot Kaca",
    };
  }
  render() {
    return (
      <>
        <p>Step one</p>
        <HeroName name="Hercules" />
        <p>Step two</p>
        <HeroName name={this.state.name} />
      </>
    );
  }
}

export default Hero;
