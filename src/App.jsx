import { useState } from 'react'
import './App.css'
import { languages } from './languages'

export default function App(){

    /**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */




    const [ currentWord, setCurrentWord ] = useState("react");

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const wordBox = Array.from(currentWord).map((letter, index) => {
        return (
            <span className='word-letter' key={index}>{letter.toUpperCase()}</span>
        )
    })

    const keyboard = Array.from(letters).map(letter => {
        return (
            <button className='alphabet'>{letter.toUpperCase()}</button>
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
        </main>
    )
}