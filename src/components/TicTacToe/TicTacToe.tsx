import Space from "../Space/Space";
import { AppContext } from "../../App";
import { useContext, useEffect, useState } from 'react';

import './style/TicTacToe.Style.css'


function TicTacToe2(){
    const {turn}: any = useContext(AppContext);
    const {setTurn}: any = useContext(AppContext);
    const {tictactoe}: any = useContext(AppContext);
    const {setTictactoe}: any = useContext(AppContext);

    const [win, setWin] = useState(false);
    const [draw, setDraw] = useState(false);

    useEffect(() => {
        if(
            tictactoe[0] == tictactoe[1] && tictactoe[0] == tictactoe[2] && tictactoe[0] != "" ||
            tictactoe[0] == tictactoe[3] && tictactoe[0] == tictactoe[6] && tictactoe[0] != "" ||
            tictactoe[0] == tictactoe[4] && tictactoe[0] == tictactoe[8] && tictactoe[0] != "" ||
            tictactoe[1] == tictactoe[4] && tictactoe[1] == tictactoe[7] && tictactoe[1] != "" ||
            tictactoe[2] == tictactoe[4] && tictactoe[2] == tictactoe[6] && tictactoe[2] != "" ||
            tictactoe[2] == tictactoe[5] && tictactoe[2] == tictactoe[8] && tictactoe[2] != "" ||
            tictactoe[3] == tictactoe[4] && tictactoe[3] == tictactoe[5] && tictactoe[3] != "" ||
            tictactoe[6] == tictactoe[7] && tictactoe[6] == tictactoe[8] && tictactoe[6] != ""
            ){
            setWin(true);
        }
        else if(
            tictactoe[0] != "" && tictactoe[1] != "" && tictactoe[2] != "" &&
            tictactoe[3] != "" && tictactoe[4] != "" && tictactoe[5] != "" &&
            tictactoe[6] != "" && tictactoe[7] != "" && tictactoe[8] != "" 
            ){
            setDraw(true);
        }

    }, [turn]);

    const reset = () => {
        setTictactoe(["", "", "", "", "", "", "", "", ""]);
        setWin(false)
        setDraw(false)
    }

    if(win){
        return(
            <>
            <h1>player {turn == 'x' ? 'O' : 'X'} ganhou</h1>
            <div className="btn" onClick={reset}>reset</div>
            </>
        )
    }
    else if(draw){
        return(
            <>
            <h1>EMPATE</h1>
            <div className="btn" onClick={reset}>reset</div>
            </>
        )
    }

    return(
        <>
        <table className="tictactoe">
            <tbody>
                <tr>
                    <td><Space player={turn} setPlayer={setTurn} id={"0"}/></td>
                    <td><Space player={turn} setPlayer={setTurn} id={"1"}/></td>
                    <td><Space player={turn} setPlayer={setTurn} id={"2"}/></td>
                </tr>
                <tr>
                    <td><Space player={turn} setPlayer={setTurn} id={"3"}/></td>
                    <td><Space player={turn} setPlayer={setTurn} id={"4"}/></td>
                    <td><Space player={turn} setPlayer={setTurn} id={"5"}/></td>
                </tr>
                <tr>
                    <td><Space player={turn} setPlayer={setTurn} id={"6"}/></td>
                    <td><Space player={turn} setPlayer={setTurn} id={"7"}/></td>
                    <td><Space player={turn} setPlayer={setTurn} id={"8"}/></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default TicTacToe2;