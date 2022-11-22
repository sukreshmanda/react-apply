import "./App.css";
import CounterOne from "./libs/hooks/custom/counter/CounterOne";
import CounterTwo from "./libs/hooks/custom/counter/CounterTwo";
import FocusInput from "./libs/hooks/ref/FocusInput";
import Timer from "./libs/hooks/ref/Timer";
// import Counter from "./libs/hooks/memo/Counter";
// import ParentComponent from "./libs/hooks/callback/ParentComponent";
// import Parent from './libs/hooks/context/Parent';
// import Counter from "./libs/hooks/reducer/Counter";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
