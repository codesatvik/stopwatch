import { useRef, useState } from "react";

function App() {

  const [secondsPassed, setSecondsPassed] = useState(0);
  let interval = useRef(0);

  function startClock() { 
    interval.current = setInterval(() => { 
      setSecondsPassed(s => s+1)
    }, 1000)
  };
  function stopClock() { 
    clearInterval(interval.current);
    interval.current = 0
  }
  function Essay() { 
    const divRef = useRef(null)
    return <div style={{ padding: 30 }}>
      <div ref={divRef} style={{ fontSize: 20, height: "80vh", overflow: "scroll" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, porro veniam accusamus reprehenderit dolore, labore error ipsa harum, aspernatur soluta iure iste aperiam similique. Voluptate eos totam in rem aperiam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo expedita aliquam quos ea ex eius ad distinctio, sequi error qui commodi, quod excepturi a, voluptate blanditiis eos? Tenetur explicabo dolorum aspernatur voluptas dolorem nobis aut, placeat ex, suscipit autem porro soluta. Voluptatibus architecto quae consectetur dolor odit nulla laborum quo dolorum, eaque recusandae molestiae, facere veniam non similique voluptatem, repudiandae culpa sapiente sint placeat? Perspiciatis dolorum laborum provident adipisci deleniti cupiditate deserunt sunt consectetur, facilis, ullam tenetur veniam ut maxime? 
      </div>
      <button onClick={() => { 
              divRef.current.scrollTop = 0;
            }}  > Take me to top</button>
    </div>
  }
  


  return <div>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
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
    <br />
    <div>
      <Essay />
    </div>
    
  
  </div>
}

export default App
