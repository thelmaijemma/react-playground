import { render } from '@testing-library/react';
import React from 'react';

// ALTERNATIVE SOLUTION
// <button
// onClick={() => this.setState({ who: 'world' })}
// >

class HelloWorld extends React.Component{
constructor(props){
super(props)
this.state={
    who: "world"
}
}

handleButtonClick1 = () => {
    
    this.setState({
        who: "World",
    })
}

handleButtonClick2 = () => {
    
    this.setState({
        who: "Friend",
    })
}

handleButtonClick3 = () => {
    
    this.setState({
        who: "React",
    })
}

render(){

    return(
        <div>
            <p>Hello {this.state.who}!</p>
            <button onClick= {this.handleButtonClick1}>World</button>
            <button onClick= {this.handleButtonClick2}>friend</button>
            <button onClick= {this.handleButtonClick3}>React</button>
        </div>

    )
}

}

export default HelloWorld;
