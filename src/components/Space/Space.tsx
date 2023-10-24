import { useState } from "react";

import { AppContext } from "../../App";
import {useContext } from 'react';

import './style/SpaceStyle.css'

function Space(props: any){

    const [valor, setValor] = useState("");
    const [lock, setlock] = useState(false);

    const {tictactoe}: any = useContext(AppContext);
    const {setTictactoe}: any = useContext(AppContext);

    const click = () => {
        if(lock){
            console.log("blocked")
        }else{
            var aux = tictactoe;
            if(props.player == "x"){
                setValor("X");
                setlock(true);
                aux[props.id] = "X"
                props.setPlayer("o");
            }
            else{
                setValor("O");
                setlock(true);
                aux[props.id] = "O"
                props.setPlayer("x");
            }
            setTictactoe(aux);
        }
    }

    return(
        <>
        <div className="space" onClick={click}>{valor}</div>
        </>
    )
}

export default Space;