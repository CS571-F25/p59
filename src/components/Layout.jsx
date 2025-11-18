import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Outlet } from 'react-router';

function Layout() {
    return <>
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/p59/#/">My Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/p59/#/home">Home</Nav.Link>
                        <Nav.Link href="/p59/#/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Push content below navbar */}
        <Container style={{ marginTop: '80px' }}>
            <Outlet /> {/* This renders the child route’s component */}
        </Container>
    </>
}

export default Layout;