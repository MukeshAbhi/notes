import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom, sumSelector } from './store/atoms/bar'

function App() {

  return (
    <>
    <RecoilRoot>
        <MainApp />
    </RecoilRoot>
    </>
  )
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobAtom);
  const messagesCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const sum = useRecoilValue(sumSelector);
  return(
    <>
    <button>Home</button> 
    <button>My network({networkCount >=100 ? "99+" : networkCount})</button>
    <button>Jobs({jobsCount})</button>
    <button>Messaging ({messagesCount})</button>
    <button>Notification({notificationCount})</button>
    <button>Me({sum}) </button>
  </>
  )
    
}

export default App
