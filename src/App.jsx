import { useState } from 'react'
import './App.css'



export default function App(){
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
        </main>
    )
}