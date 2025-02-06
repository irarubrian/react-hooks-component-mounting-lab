import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Time: {this.state.time}s</div>;
  }
}

export default Timer;
