
import './App.css'
import { HashRouter, Route, Routes } from "react-router"
import Home from "./components/pages/Home"
import AboutMe from "./components/pages/AboutMe"
import Layout from './components/Layout.jsx'

function App() {
  return <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </>
}

export default App
