import { useState } from 'react'
import './App.css'
import { languages } from './languages'

export default function App(){

    const [ currentWord, setCurrentWord ] = useState("elephant");

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const [ guessedLetters, setGuessedLetters ] = useState("")

    const wordBox = Array.from(currentWord).map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter)

        return (
            <span className='word-letter' key={index}>{isGuessed ? letter.toUpperCase() : ""}</span>
        )
    })
    
    console.log(guessedLetters)

    const alphabetChosen = (letter) => {
        setGuessedLetters((prev) => (
            prev.includes(letter) ? prev : (prev+letter)
        ))
    }

    const keyboard = Array.from(letters).map(letter => {
        const isGuessed = guessedLetters.includes(letter)

        let letterStyles

        if(isGuessed){
            if(currentWord.includes(letter))
                letterStyles = { backgroundColor: "#10A95B" }
            else
                letterStyles = { backgroundColor: "#EC5D49 "}
        }

        return (
            <button 
                style={letterStyles}
                className='alphabet' 
                key={letter} 
                onClick={()=>alphabetChosen(letter)}
            >
                    {letter.toUpperCase()}
            </button>
        )
    })

    const langBoxes = languages.map((obj) => {
        const styles = {
            backgroundColor : obj.backgroundColor,
            color : obj.color,
            padding: "5px",
            borderRadius: "5px"
        }
        return (
            <div style={styles} key={obj.name}>{obj.name}</div>
        )
    })

    function newGameCaller(){
        // to do
    }

    return (
        <main>
            <hgroup>
                <h3>Assembly: Endgame</h3>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </hgroup>
            <section className="status-bar">
                <h3>You Win</h3>
                <p>Well done! 🎉</p>
            </section>
            <section className="langBoxContainer">
                {langBoxes}
            </section>
            <section className="wordBox">
                {wordBox}
            </section>
            <section className="key-board">
                {keyboard}
            </section>
            <button className="new-game-btn" onClick={newGameCaller}>
                New Game
            </button>
        </main>
    )
}