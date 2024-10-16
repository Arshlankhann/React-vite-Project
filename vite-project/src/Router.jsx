import React from 'react'
import Navbar from './Components/navbar'
import Home from './Components/Home'
import About from './Components/About'
import Login from './Components/Login'
import User from './Components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <> <Navbar /><Home /></>
        },
        {
            path: "/about",
            element: <> <Navbar /><About /></>
        },
        {
            path: "/login",
            element: <><Navbar /><Login /></>
        },
        {
            path: "/user/:username",
            element: <><Navbar /><User /></>
        }
    ])
    return (
        <div>

            <div>Lets Learn Router</div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router