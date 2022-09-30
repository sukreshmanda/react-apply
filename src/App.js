import './App.css';
import ClassComponent from './libs/components/ClassComponent';
import Functional from './libs/components/Functional';
import JSXExample from './libs/JSX/JSX';

function App() {
  const name = "sukresh";
  return (
    <div className="App">
      <Functional name = {name}/>
      <ClassComponent>
      </ClassComponent>
    </div>
  );
}

export default App;
