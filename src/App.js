import { useState } from 'react';
import './App.css';
import ClassComponent from './libs/components/ClassComponent';
import Functional from './libs/components/Functional';
import ConditionalRendering from './libs/conditional-rendering/ConditionalRendering';
import JSXExample from './libs/JSX/JSX';
import Welcome from './libs/lifecycle/Welcome';
import ListsAndKeys from './libs/lists&keys/ListsAndKeys';
import Props from './libs/props-state/Props';
import State from './libs/props-state/State';

function App() {
  return (
    <div className="App">
      <ListsAndKeys/>
    </div>
  );
}

export default App;
