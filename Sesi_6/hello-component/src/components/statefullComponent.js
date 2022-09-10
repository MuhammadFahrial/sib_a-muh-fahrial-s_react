import React from "react";

// Ketika mendengar istilah "stateful", artinya sebuah komponen atau app akan menyimpan informasi terkait komponen tersebut. Dan komponen itu juga dapat mengubah informasi tersebut atau dengan kata lain, state

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
    };
  }

  render() {
    return <h1>{this.state.username}</h1>;
  }
}
