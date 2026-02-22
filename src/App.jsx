import { useState } from 'react'
import './App.css'
import { languages } from './languages'
import clsx from 'clsx';

export default function App() {

    const [currentWord, setCurrentWord] = useState("elephant");

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const [guessedLetters, setGuessedLetters] = useState("")

    const wrongGuessCount = Array.from(guessedLetters).filter(guessedLetter => !currentWord.includes(guessedLetter)).length

    // const charset = new Set(currentWord)
    // const isGameOver = (wrongGuessCount==8 || guessedLetters.length-wrongGuessCount===charset.size) ? true : false

    const isGameWon = Array.from(currentWord).every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount == 8

    const isGameOver = isGameLost || isGameWon

    const wordBox = Array.from(currentWord).map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter)

        return (
            <span className='word-letter' key={index}>{isGuessed ? letter.toUpperCase() : ""}</span>
        )
    })

    const alphabetChosen = (letter) => {
        setGuessedLetters((prev) => (
            prev.includes(letter) ? prev : (prev + letter)
        ))
    }

    const keyboard = Array.from(letters).map(letter => {
        const isGuessed = guessedLetters.includes(letter)

        let letterStyles

        if (isGuessed) {
            if (currentWord.includes(letter))
                letterStyles = { backgroundColor: "#10A95B" }
            else
                letterStyles = { backgroundColor: "#EC5D49 " }
        }

        return (
            <button
                style={letterStyles}
                className='alphabet'
                key={letter}
                onClick={() => alphabetChosen(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const langBoxes = languages.map((obj, index) => {
        const styles = {
            backgroundColor: obj.backgroundColor,
            color: obj.color,
            padding: "5px",
            borderRadius: "5px",
            display: "inline-block",
            position: "relative",
            overflow: "hidden"
        }
        return (
            <div
                className={wrongGuessCount >= (index + 1) ? "lost" : ""}
                style={styles}
                key={obj.name}>
                {obj.name}
            </div>
        )
    })

    function newGameCaller() {
        // to do
    }

    function statusBarRender() {
        let content = null;
        if (isGameOver) {
            if (isGameWon) {
                content = (
                    <>
                        <h3>You Win</h3>
                        <p>Well done! 🎉</p>
                    </>
                )
            }
            else {
                content = (
                    <>
                        <h3>Game over!</h3>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            }
        }
        return content;
    }

    const statusBarSectionClass = clsx("status-bar", {
        won: isGameWon,
        lost: isGameLost
    })

    return (
        <main>
            <hgroup>
                <h3>Assembly: Endgame</h3>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </hgroup>
            <section
                className={statusBarSectionClass}
            // style={statusBarSectionStyles}
            >
                {statusBarRender()}
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
            {isGameOver && <button className="new-game-btn" onClick={newGameCaller}>
                New Game
            </button>}
        </main>
    )
}