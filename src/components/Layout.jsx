import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Outlet } from 'react-router';
import '@/css/Gallery.css';

function Layout() {
    return <>
        <Navbar expand="lg" fixed="top" className='navbar'>
            <Container fluid>
                <Navbar.Brand href="/p59/#/">My Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/p59/#/home">Home</Nav.Link>
                        <Nav.Link href="/p59/#/about">About Me</Nav.Link>
                        <Nav.Link href="/p59/#/test-gallery">Test Gallery</Nav.Link>
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