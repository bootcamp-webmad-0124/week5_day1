import "./App.css";
import { useState } from "react";
import Counter from "./components/01-use-state/Counter"
import Timer from "./components/02-use-state-loop/Timer.jsx"
import TimerTwo from "./components/03-use-effect-mounting/TimerTwo.jsx"
import TimerThree from "./components/04-use-effect-unmounting/TimerThree.jsx"
import TimerFour from "./components/05-use-effect-conditional-updates/TimerFour.jsx"


function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">

      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {
        show && <TimerFour />
      }

      {/* 

      { show && <TimerThree /> }

      {show && <TimerTwo />}

      {show && <Timer />}

      {show && <Counter />}

      */}

    </div>
  )
}

export default App;
