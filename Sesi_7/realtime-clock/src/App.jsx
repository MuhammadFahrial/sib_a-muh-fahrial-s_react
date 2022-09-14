import React from "react";
import { useState } from "react";
import "./App.css";

// Class Component
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       date: new Date(),
//     };
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Realtime CLOCK</h1>
//         <hr />
//         <h1>{this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

// Function Component
function App() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  setInterval(() => tick(), 1000);

  return (
    <div className="App">
      <h1>Realtime CLOCK</h1>
      <hr />
      <h1>{date.toLocaleDateString()}</h1>
    </div>
  );
}

export default App;
