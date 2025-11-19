
import '@/css/App.css';
import { HashRouter, Routes, Route } from 'react-router';
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Layout from './components/Layout.jsx';
import GalleryPage from './components/pages/GalleryPage.jsx';

function App() {
  return <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path='/test-gallery' element={<GalleryPage />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </>
}

export default App
