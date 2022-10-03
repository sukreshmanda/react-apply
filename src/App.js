import './App.css';
import ClassComponent from './libs/components/ClassComponent';
import Functional from './libs/components/Functional';
import ConditionalRendering from './libs/conditional-rendering/ConditionalRendering';
import JSXExample from './libs/JSX/JSX';
import Props from './libs/props-state/Props';
import State from './libs/props-state/State';

function App() {
  const name = "sukresh";
  return (
    <div className="App">
      <ConditionalRendering/>
    </div>
  );
}

export default App;
