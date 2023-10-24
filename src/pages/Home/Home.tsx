import { useContext } from "react";
import TicTacToe from "../../components/TicTacToe/TicTacToe";

import './HomeStyle.css'
import { AppContext } from "../../App";

function Home(){
    const {turn}: any = useContext(AppContext);

    return(
        <>
        <div className="home">
            <h2>turn: {turn}</h2>
            <TicTacToe/>
        </div>
        </>
    )
}

export default Home;