import React from 'react';
// Q - what are other ? types that are not a button? 

class Considerations extends React.Component{


    orderConsiderations(index){
        return this.props.topics[index].considerations.sort()
    }


    renderLConsiderations(){
        return this.props.topics.map((section, index) => (
            <div>
                <div>
                <button key={index} onClick={()=> this.showGoods(index)}>
                    {section.title}
                </button>
                </div>
                <p>{this.orderConsiderations(index)}</p>
            </div>
        ))
    }

    render() {
        return (
            <div>
            {this.renderLConsiderations()}
        </div>
        )
    }


}

export default Considerations;