// why do I exist? I can template an element
// and each time, all you have to do is call the element
// and it is already templated

import React from 'react';
import './Split.css';
function Split(prop){
    // not camel bc it is a function 
    // for the component, like App
        const utilizePropClassName = `split ${prop.className}`;
        const useFlexFromSplit = { flex: prop.flexBasis };
        // like saying (we'll specify it there at the time of dec)
        return (
        <div className={utilizePropClassName}
                style={useFlexFromSplit}>
            {prop.children}
        </div>
        // can also use JSX here
        )
}
//without this {prop children}, the content in app js disappears

export default Split; 

// It's worth noting here, that when we 
// read props inside a component, we 
// shouldn't alter them! Props are read-only. 
// You might be able to see text stating 
// "read-only" inside the React Developer 
// Tools, you can't change props directly.
