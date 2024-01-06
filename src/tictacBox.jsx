import { useEffect, useState } from 'react';
import './boxxx.css';
export default function TicTacTo() {
    const [count, setCount] = useState(0);
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [winner, setWinner] = useState('');
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
    let changeText = (i) => {
        if(winner === 'Player1 Winner' || winner === 'Player2 Winner'){
            return;
        }
        let button = document.getElementById(i);
            setCount(count + 1);
            if (button.innerText == 'X') { return button.innerText = 'X' }
            else if (button.innerText == 'O') { return button.innerText = 'O' };
            count % 2 == 0 ? button.innerText = 'X' : button.innerText = 'O';
            count % 2 == 0 ? setArr1([...arr1, i]) : setArr2([...arr2, i]);
    }
    const checkwinner = () => {
        if (arr1.length >= 3 || arr2.length >= 3) {
            for (let i = 0; i < lines.length; i++) {
                if (arr1.includes(lines[i][0]) && arr1.includes(lines[i][1]) && arr1.includes(lines[i][2])) {
                    setWinner('Player1 Winner');
                }

                if (arr2.includes(lines[i][0]) && arr2.includes(lines[i][1]) && arr2.includes(lines[i][2])) {
                    setWinner('Player2 Winner');
                }
            }
        }
    }
    useEffect(checkwinner, [arr1, arr2]);

    let reset = ()=>{
        document.querySelectorAll(".allbutton").forEach( e => e.innerText = '' );
        setCount(0);
        setArr1([]);
        setArr2([]);
        setWinner('');
    }
    let array = ()=>{
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(<button className='allbutton' onClick={() => changeText(i)} key={i} id={i}></button>)
        }
        return arr;
    }

    
    return <>
         <h1   >Tic-Tac-Toe</h1>
         <h2 className='h2'><span>Player1 : X</span><span>Player2 : O</span></h2>
        <div className="mainDiv">{array()}</div>
        <h3>{winner}{winner ? ' 🥳🥳🥳🥳' : ''}</h3>
        <button className='reset' onClick={reset}>Reset</button>
    </>
}