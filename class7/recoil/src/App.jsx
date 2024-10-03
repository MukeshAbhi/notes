import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./store/atoms/count"
import { evenSelector } from "./store/atoms/count"


function App() {
  
  
  // wrap anyone who wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

 function Count() {
  console.log("rerender")
  return <div>
    <CountRenderer  />
    <Buttons  />
    <Even />
  </div>
}


function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Even(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {!isEven ? "It is even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  console.log("Hi from button")
  return <div>
    <button onClick={() => {
      setCount(c => c+ 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(c => c- 1)
    }}>Decrease</button>
  </div>
}

export default App