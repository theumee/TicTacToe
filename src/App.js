import './App.css';
import {useState} from 'react';

const App = () => {
  
  const [playerTurn,setPlayerTurn]  = useState("X");
  const [placeholder,setPlaceholder] = useState(["","","","","","","","",""]);
  const [winner,setWinner] = useState(false);
  const [gameStatus,setGameStatus] = useState("ㅤ");




  
  const squareClicked = (index) => {
    const winCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    if(placeholder[index] === "" && winner === false){
      placeholder[index] = playerTurn;
      setPlaceholder(placeholder);                                                                           
      setPlayerTurn(playerTurn === "X" ? "O" : "X");
      
      for(let winRow of winCombo){
        let p1 = placeholder[winRow[0]];
        let p2 = placeholder[winRow[1]];
        let p3 = placeholder[winRow[2]];
        
        if(p1 !== "" &&  p1 === p2 && p2 === p3 ){
          setWinner(true);
          setGameStatus(`${playerTurn} WON`);
          return;
        }

      }
      
    }
    if (!placeholder.includes("")){
      setGameStatus("It's a tie!");
    }
    
  }

  const handleReset = () => {
    
      setPlayerTurn("X");
      setWinner(false);
      setPlaceholder(["","","","","","","","","",]);
      setGameStatus("ㅤ");
    
  }
 
  


  return (

    <div className="App">

      <h1 className="game--title">Tic Tac Toe</h1>
      <h2 className="game--status">{gameStatus}</h2>
      <div className="game--container">
        {placeholder.map((square, index) => {
          return (<div onClick={() => squareClicked(index)} className="cell" >{square}</div>)
        })}
      </div>
      <h3 className="game--status">Player {playerTurn}'s Turn</h3>
      <button onClick={() => handleReset()} type="reset" className="game--restart">Reset</button>
    </div>


   );
}

export default App;
