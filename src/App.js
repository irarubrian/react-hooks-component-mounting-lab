import React from 'react';
import Timer from './Timer';  // Correct the import path if needed

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [] // Array to keep track of timers
    };
  }

  componentDidMount() {
    this.handleAddTimer(); // Add timer when component mounts
  }

  handleAddTimer = () => {
    const newTimerId = Math.random(); // Generate a unique ID for the timer
    this.setState(prevState => ({
      timers: [...prevState.timers, newTimerId] // Add the new timer to the state
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid"> {/* Wrap timers with this div */}
          {this.state.timers.map(timerId => (
            <Timer key={timerId} /> // Render Timer component for each timer
          ))}
        </div>
      </div>
    );
  }
}

export default App; // Make sure App is exported correctly
