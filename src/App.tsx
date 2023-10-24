import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, createContext } from "react";
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/Home'

export const AppContext = createContext({});

function App() {
  const [turn, setTurn] = useState("x");
  const [tictactoe, setTictactoe] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <>
    <AppContext.Provider value={{turn, setTurn, tictactoe, setTictactoe}}>
      <Router>
          <ScrollToTop/>
          <Routes>
            <Route path={"/"} Component={Home}/>
          </Routes>
        </Router>
    </AppContext.Provider>
    </>
  )
}

export default App
