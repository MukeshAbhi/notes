import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [boxs,setBoxs] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function onClickhandler(i){
    const newBox = boxs.slice();
    if(calculateWinner(boxs) || boxs[i]){
      return;
    }
    if(isX){
      newBox[i]="X";
    }else{
      newBox[i]="O"
    }
    setIsX(!isX);
    setBoxs(newBox);

    const winner = calculateWinner(boxs);
    let statusOfPlayer;
    if(winner){
      statusOfPlayer = "Winner : " + winner;
    } else {
      statusOfPlayer = "Next player: " + (isX ? "X" : "O") ;
    } 
  }

  return (
    <>
      <div className='player'>{statusOfPlayer}</div>
      <div className='row'>
        <Box value = {boxs[0]} onBoxClick={() => onClickhandler(0)} />
        <Box value = {boxs[1]} onBoxClick={() => onClickhandler(1)} />
        <Box value = {boxs[2]} onBoxClick={() => onClickhandler(2)} />
      </div>
      <div className='row'>
        <Box value = {boxs[3]} onBoxClick={() => onClickhandler(3)} />
        <Box value = {boxs[4]} onBoxClick={() => onClickhandler(4)} />
        <Box value = {boxs[5]} onBoxClick={() => onClickhandler(5)} />
      </div>
      <div className='row'>
        <Box value = {boxs[6]} onBoxClick={() => onClickhandler(6)} />
        <Box value = {boxs[7]} onBoxClick={() => onClickhandler(7)} />
        <Box value = {boxs[8]} onBoxClick={() => onClickhandler(8)} />
      </div>
    </>
  )
}

function Box({value,onBoxClick}){
  return (
    <button className='unit-box' onClick={onBoxClick}>{value}</button>
  );
}

function calculateWinner( boxs){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++){
    let [a ,b ,c] = lines[i];
    if(boxs[a]&& boxs[a]===boxs[b] && boxs[a] === boxs[c]){
      return boxs[a];
    }
  }
  return null;
}


export default App
