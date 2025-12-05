
import '@/css/App.css';
import { HashRouter, Routes, Route } from 'react-router';
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Layout from './components/Layout.jsx';
import GalleryPage from './components/pages/GalleryPage.jsx';
import ArtPages from '@/data/ArtPages.json';
import Contact from './components/pages/Contact.jsx';

function App() {
  const artData = ArtPages.collections;
  return <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          {artData.map((collection) => {
            console.log(collection.slug);
            return <Route 
              key={collection.collectionTitle} 
              path={`/gallery/${collection.slug}`} 
              element={<GalleryPage collection={collection} />} />
          })}
          <Route path="/contact" element={<Contact />} />
          </Route>
      </Routes>
    </HashRouter>
  </>
}

export default App
