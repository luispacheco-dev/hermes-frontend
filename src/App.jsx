import "./App.css"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

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
                <Route path="*" element={<>Hello World!</>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
