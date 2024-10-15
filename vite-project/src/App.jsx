import { useState, useEffect, useRef } from 'react'
import './App.css'
import React from 'react'

const App = () => {
    const [count, setcount] = useState(0)
    const [showbtn, setshowbtn] = useState(true)
    const [name, setname] = useState({ gmail: "", phone: "" })
    const handeleClick = () => {
        alert("I am Clicked")
    }
    const handleChange = (e) => {
        setname(...name, { [e.target.name]: e.target.value })
    }
    return (
        <>

            <div>
                App
                {showbtn ? <button>I will show you true</button> : <button>I will show you false</button>}

            </div>
            <button onClick={() => { setshowbtn(!showbtn) }}>Click me</button>
            <input type='text' name='email' value={name.gmail} onChange={handleChange}></input>
            <input type='text' name='phone' value={name.phone} onChange={handleChange}></input>
            <button onClick={handeleClick}>Event Listner</button>
        </>
    )
}

export default App