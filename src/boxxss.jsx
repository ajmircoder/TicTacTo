import { useState } from "react";

export default function ScoreKeeper (){
    let [winScore, setWinScore] = useState(5);
    const [scores, setScore] = useState(new Array(5).fill(0));
    let oneplus = (idx)=>{
        setScore((prevScores)=>{
            return prevScores.map((score, i)=>{
                if(i === idx) return score + 1;
                return score;
            })
        })
        
    }
    let reset = ()=>{
        setScore(new Array(5).fill(0));
    }
    return <>
    <div>
        <h1>Score Keepers</h1>
        <ul>
            {scores.map((score, inx)=>{
                return <h2 key={inx}><li key={inx}>
                    Player {inx + 1} : {score}
                    <button  style={{margin: '0 5px'}} onClick={() =>oneplus(inx)}>+1</button>
                    {score == winScore ? <p>Winner</p> : ''}
                </li></h2>
                
            })}
        </ul>
        <button onClick={() => reset()}>Reset</button>
        
    </div>
    </>
}