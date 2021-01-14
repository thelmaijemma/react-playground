import React from 'react';
// !! not not (see testing) 

// the default prop seems unnecesarry ask 

class Tabs extends React.Component{
    static defaultProps = { tabs: [] };

    state = {
        currentTabIndex: 0
    };

    handleButtonClick = (index) => {
        console.log('button clicked!', { index })
        this.setState({ currentTabIndex: index })
    }

    renderButtons() {
        return this.props.tabs.map((tabThingy, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tabThingy.name}
            </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
        <div className='content'>
            {currentTab.content}
        </div>
        )
    }

    render() {
        return (
            <div>
            {this.renderButtons()}
            {!!this.props.tabs.length && this.renderContent()}
        </div>
        )
    }
}

/*
        this.state = {
            [
                {name:"hi",
                content:"hello"},
                {name:"hi",
                content:"hello"},
                {name:"hi",
                content:"hello"},
            ]
        }
    }
    openUp(){

    }

    <div>
            {this.state[0].content}
            <button onClick={this.openUp}>{this.state.name}</button>
            </div>
    */

export default Tabs;