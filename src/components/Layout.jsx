import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Outlet } from 'react-router';
import '@/css/Gallery.css';
import ArtPages from '@/data/ArtPages.json';
import GalleryPage from './pages/GalleryPage';

function Layout() {
    const artData = ArtPages.collections;
    return <>
        <Navbar expand="lg" fixed="top" className='navbar'>
            <Container fluid>
                <Navbar.Brand href="/p59/#/home">My Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/home">Home</Nav.Link>
                        <Nav.Link href="#/about">About Me</Nav.Link>
                        <Nav.Link href="#/test-gallery">meow</Nav.Link>
                        <Nav.Link href="#/gallery/test-gallery">Test Gallery</Nav.Link>
                        {artData.map((collection) => {
                            return <Nav.Link href={`#/gallery/${collection.slug}`} key={collection.collectionTitle}>{collection.collectionTitle}</Nav.Link>})}
                        <Nav.Link href="#/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container fluid style={{ marginTop: '80px' }}>
            <Outlet /> 
        </Container>
    </>
}

export default Layout;