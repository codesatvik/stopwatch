import { useState } from "react";

function App() {

  const [secondsPassed, setSecondsPassed] = useState(0);
  const [interval, setIntervalvalue] = useState(0)
  function startClock() { 
    let i = setInterval(() => { 
      setSecondsPassed(s => s+1)
    }, 1000)
    setIntervalvalue(i)
  };
  function stopClock() { 
    clearInterval(interval);
  }


  return <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
    <div style={{ fontSize: 100 }}>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={startClock}>Start clock</button>
        <button onClick={stopClock}>Stop clock</button>
      </div>
      <div>
        { secondsPassed } s
      </div>
    </div>
    
  </div>
}

export default App
