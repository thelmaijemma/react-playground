import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'foo',
      hello: 'Hello, world!',
      list: [1, 2, 3],
      obj: { nested: 'object', yes: true },
    }
  }
  // We can access this state within the render function!
  render() {
    console.log(this.state)
    return (
      <div>{this.state.hello}</div>
    )
}
}
export default TheDate;
// in devtools under states (not props) you can type
// new states and the div will update 