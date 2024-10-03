import { memo, useContext, useState } from "react"
import { CountContext, SetCountContext } from "../Context";
import { set } from "mongoose";

function App() {
  const [count, setCount] = useState(0);
  
  // wrap anyone who wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Count />
        </SetCountContext.Provider>
      </CountContext.Provider>
    </div>
  )
}

const Count = memo(function Count() {
  console.log("rerender")
  return <div>
    <CountRenderer  />
    <Buttons  />
  </div>
})


function CountRenderer() {
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons() {
  const count = useContext(CountContext)
  const setCount  = useContext(SetCountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App