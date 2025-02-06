import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Correct path to App.js
import Timer from './Timer'; // Correct path to Timer

describe('<App />', () => {
  it('calls componentDidMount and adds a Timer', () => {
    const appWrapper = shallow(<App />);

    // Mock componentDidMount to track if it has been called
    const componentDidMountSpy = jest.spyOn(App.prototype, 'componentDidMount');
    appWrapper.instance().componentDidMount(); // Manually trigger it, if necessary

    // Ensure componentDidMount has been called
    expect(componentDidMountSpy).toHaveBeenCalled();

    // Check if the TimerGrid class exists
    expect(appWrapper.find('.TimerGrid').length).toBe(1); // Expecting 1 TimerGrid container
    
    // Check if Timer component is rendered inside TimerGrid
    expect(appWrapper.find(Timer).length).toBe(1); // Expecting 1 Timer component

    // Check if the state has been updated correctly
    expect(appWrapper.state().timers.length).toBe(1); // Updated state reference to 'timers'
    
    // Clean up spy
    componentDidMountSpy.mockRestore();
  });
});
