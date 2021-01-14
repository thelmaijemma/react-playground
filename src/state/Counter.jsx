/////////////////////// !!! EVENT LISTENER = ES6 ////////////
/////////////////////////// = () => {} /////////////////////
// When adding an event listener function to a 
// React class, use an EQUALS ARROW function to make sure 
// that this is referring to the class instance.
///////////////////////
/*handleButtonClick = () => {
    console.log(this.state.count) }
this would not work
handleButtonClick() {}
*/
///////////////////////
import React from 'react';


class Counter extends React.Component {
    /*
    shorthand state initiation:
    state = {
        count: 0
    };
    */
    constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { count: 0 } }

  // omit IN RETURN: <button onClick={function() { console.log('clicked!') }}
  // bc too messy 
    handleButtonClick = () => {
        console.log(this.state.count)
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        const newCount = this.state.count + 1;
        this.setState({
            count: newCount
        })
        // or  this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button
                    onClick= {this.handleButtonClick}
                >
                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter;