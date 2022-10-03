import './App.css';
import ClassComponent from './libs/components/ClassComponent';
import Functional from './libs/components/Functional';
import JSXExample from './libs/JSX/JSX';
import Props from './libs/props-state/Props';
import State from './libs/props-state/State';

function App() {
  const name = "sukresh";
  return (
    <div className="App">
      <Props name="Steve Rogers" superHero="Captain America"/>
      <State name="Tony Stark" superHero="Ironman"/>
    </div>
  );
}

export default App;
