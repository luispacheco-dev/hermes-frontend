import "./App.css"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/home/Home.jsx"
import { BrowserRouter } from "react-router-dom"
import Login from "./components/login/Login.jsx"
import Layout from "./components/layout/Layout.jsx"
import Profile from "./components/profile/Profile.jsx"
import Friends from "./components/friends/Friends.jsx"
import Register from "./components/register/Register.jsx"
import Requests from "./components/requests/Requests.jsx"

/*
 * App component (Router)
 *
 * @component
 * @returns {JSX.Element} The rendered route
 */

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/requests" element={<Requests />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<>Page not found</>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
