import { BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { lazy } from 'react';
import './App.css'
const  Dashboard  = lazy( () => import('./Components/Dashboard')) ;
const  Landing  = lazy(() => import('./Components/Landing')) 
function App() {
  

  return (
     // suspense API
    <>
    
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(
    <>
      <div style={{background: "black", color: "white"}}>
      Hi from top bar 
      <button onClick={() =>{
        navigate("/");
      } }>
        Loading Page</button>
      <button onClick={() => {
        navigate("/dashboard") ;
      }}>Dashboard</button>
    </div>
    </>
  )
}
export default App
