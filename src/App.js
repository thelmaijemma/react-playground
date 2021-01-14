import React from 'react';
import Messages from './Messages';
import './App.css'
import Split from './composition/Split'
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import { render } from '@testing-library/react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './Tabs/Tabs';
import Accordion from './state-drills/Accordion/Accordion';
import Considerations from './Considerations';
// make 2 tooltips here and another inside the App directly
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

const topic1 = [
  {
    title: "what to consider",
    rank: 0,
    considerations: ["first thought", "and also", "also"],
  }
]


const firstTooltip = (
  <Tooltip message='tooltip message'>
ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message'>
    officiis
  </Tooltip>
)
// you can also put these in tooltip js

// function App() { OR
class App extends React.Component {
  static defaultProps = {
    Step: {
      steps: 1,
    }
  };
render(){
  return (
    <main className='App'>
      <Accordion sections={sections}></Accordion>
      <Tabs tabs={tabsProp} />
      <RouletteGun></RouletteGun>
      <Bomb></Bomb>
      <HelloWorld></HelloWorld>
      <TheDate></TheDate>
      <Counter count={123} />
      <Split className='left' flexBasis='2'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
    </main>
  )
}
}

export default App
// we're telling JavaScript to export the App 
// variable from the App.js file into any 
// file that asks for it.

