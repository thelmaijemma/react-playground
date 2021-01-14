// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom


import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs/Tabs'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

/* 
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });
now showing all the content of the file */


// The wrapper allows us to find nodes within this 
// component's tree; it also allows us to simulate events on nodes.


/* now showing all the content of the file 

it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

 Let's look at the snapshot generated for this test.
exports[`Tabs Component renders empty given no tabs 1`] = `
<div>
  0
</div>

That looks wrong, we're rendering the length of 0! This is an easy fix, 
we can coerce the .length call inside render into a boolean using not-not, !!.
`;^*/


describe(`Tabs Component`, () => {
    const tabsProp = [/* contents not shown */]
  
    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Tabs />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
    it('renders empty given no tabs', () => {
      const wrapper = shallow(<Tabs />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders the first tab by default', () => {
      const wrapper = shallow(<Tabs tabs={tabsProp} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

//////////// CODE TO PUSH BUTTON ///////////////
it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
  //  to see the HTML for what we currently have selected, called debug. 
  // We can do a debug before and after the find to see what happens.
  
 /* console.log('>>> WRAPPER <<<')
  console.log(wrapper.debug())
  console.log('>>> FIND(BUTTON) <<<')
  console.log(wrapper.find('button').at(1).debug())*/


