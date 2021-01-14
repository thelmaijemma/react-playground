import React from 'react';

class Tabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            [
                {name:,
                content:,},
                {name:,
                    content:,},
                {name:,
                    content:,},
            ]
        }
    }
    openUp(){

    }

    return(){
        render(
            <div>
            {this.state[0].content}
            <button onClick={this.openUp}>{this.state.name}</button>
            </div>
        )
    }
}