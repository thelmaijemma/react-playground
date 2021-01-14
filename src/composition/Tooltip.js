import React from 'react';
import './Tooltip.css';



function Tooltip(props) {
    return (
      <span className='Tooltip'>
        <span className='Tooltip-content'>
          {props.children}
        </span>
        <div className='Tooltip-message'>
          {props.message}
        </div>
      </span>
    )
  }
export default Tooltip;

// two sections inside the Tooltip, one for 
// the text to display and the second for 
// the message that appears on a hover. 
// We'll use the children prop for the 
// normal text and a prop called message 
// for the text that will appear