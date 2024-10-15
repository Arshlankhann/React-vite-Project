import { useState, useEffect } from "react";
import React from "react";
import './App.css'

function Main_card() {
    const [card, setCard] = useState([])

    const fetchData = async () => {
        let a = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await a.json()
        setCard(data)
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <navbar />
            <div className="container">
                {card.map((card) => {
                    return <div key={card.id} className="card">
                        <h1>{card.title}</h1>
                        <p>{card.body}</p>
                        <span>By: UserId: {card.userId}</span>
                    </div>
                })}

            </div>
        </>
    )
}
export default Main_card