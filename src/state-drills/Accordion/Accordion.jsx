import React, { Component } from 'react';
// see solution version at bottom 

class Accordion extends Component {
  // you only use the constructor when are using props
  constructor(props) {
    super(props)
  }
  state = {
    content: null,
  }

  showGoods = (index) => {
    const {sections} = this.props;
    this.setState({ content: sections[index].content })
  }
  {/*showGoods = (index) => {
    this.setState({ content: this.props.sections[index].content })
  }*/}

  willShowQ = () => {
    const currentContent = this.state.content;

    if (this.state.content) {
      return (<p>
        {currentContent}
      </p>
      )
    }
  }


  renderLi(){
    return this.props.sections.map((section, index) => (
      <li key={index}>
        <button  onClick={() => this.showGoods(index)}>
          {section.title}
        </button>
      </li>
    ))
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderLi()}
        </ul>
        {this.willShowQ()}
      </div>
    )
  }
}

export default Accordion;

/* Solution
import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null,
  }

  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex })
  }

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className='Accordion__item' key={idx}>
        <button
          type='button'
          onClick={() => this.handleSetActiveSecion(idx)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}
*/