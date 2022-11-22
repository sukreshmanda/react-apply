import "./App.css";
import FocusInput from "./libs/hooks/ref/FocusInput";
import Timer from "./libs/hooks/ref/Timer";
// import Counter from "./libs/hooks/memo/Counter";
// import ParentComponent from "./libs/hooks/callback/ParentComponent";
// import Parent from './libs/hooks/context/Parent';
// import Counter from "./libs/hooks/reducer/Counter";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
