import { useState } from 'react'
import './App.css'
import { languages } from './languages'
import clsx from 'clsx';
import farewellMsgPicker from './utils/farewellMsgPicker';
import cheerUpMsgPicker from './utils/cheerUpMsgPicker'

/**
 * Backlog:
 * 
 * ✅ Farewell messages in status section
 * - Disable the keyboard when the game is over
 * - Fix a11y issues
 * - Make the New Game button reset the game
 * - Choose a random word from a list of words
 * - Confetti drop when the user wins
 * 
 * Challenge: Disable the keyboard when the game is over
 */

export default function App() {

    const [currentWord, setCurrentWord] = useState("elephant");

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const [guessedLetters, setGuessedLetters] = useState("")

    const wrongGuessCount = Array.from(guessedLetters).filter(guessedLetter => !currentWord.includes(guessedLetter)).length

    // const charset = new Set(currentWord)
    // const isGameOver = (wrongGuessCount==8 || guessedLetters.length-wrongGuessCount===charset.size) ? true : false

    const isGameWon = Array.from(currentWord).every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount == (languages.length-1)

    const isGameOver = isGameLost || isGameWon

    const wordBox = Array.from(currentWord).map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter)

        const condition = isGameOver && (!isGuessed)

        const classNames = clsx("word-letter",{lettersNotGuessed : condition})

        return (
            <span className={classNames} key={index}>{isGuessed ? letter.toUpperCase() : (isGameOver ? letter.toUpperCase() : "")}</span>
        )
    })

    const alphabetChosen = (letter) => {
        setGuessedLetters((prev) => {
            return prev.includes(letter) ? prev : (prev + letter)
        })
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

    const lastGuess = guessedLetters.at(-1)

    const isWrongGuess = guessedLetters.length>0 && (!currentWord.includes(lastGuess))
    const isRightGuess = guessedLetters.length>0 && (currentWord.includes(lastGuess))

    function statusBarContentRender() {
        let statusBarContent = null;

        if (isGameOver) {
            if (isGameWon) {
                statusBarContent = (
                    <>
                        <h3>You Win</h3>
                        <p>Well done! 🎉</p>
                    </>
                )
            }
            else {
                statusBarContent = (
                    <>
                        <h3>Game over!</h3>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            }
        }
        else if (guessedLetters.length>0) {
            if(!currentWord.includes(guessedLetters.at(-1))){
                statusBarContent = (
                    <p>{farewellMsgPicker(languages[wrongGuessCount - 1].name)}</p>
                )
            }
            else{
                statusBarContent = (
                    <p>{cheerUpMsgPicker()}</p>
                )
            }
        }

        // console.log(languages[wrongGuessCount-1])
        return statusBarContent;
    }

    const statusBarSectionClass = clsx("status-bar", {
        rightGuess: isRightGuess,
        wrongGuess : isWrongGuess,
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
                {statusBarContentRender()}
            </section>
            <section className="langBoxContainer">
                {langBoxes}
            </section>
            <section className="wordBox">
                {wordBox}
            </section>
            <section className={isGameOver ? "key-board disable" : "key-board"}>
                {keyboard}
            </section>
            {isGameOver && <button className="new-game-btn" onClick={newGameCaller}>
                New Game
            </button>}
        </main>
    )
}