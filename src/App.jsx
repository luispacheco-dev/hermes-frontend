import "./App.css"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/home/Home.jsx"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout.jsx"

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
                </Route>
                <Route path="*" element={<>Page not found</>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
