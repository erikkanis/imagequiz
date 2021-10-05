import { Navbar, Container, Nav} from 'react-bootstrap';
import { useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation();

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Practicum 5</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/register">Sign Up</Nav.Link>
                {(location.state && location.state.username) ?
                    <Navbar.Text>
                        Signed in as: <a href="/login">{location.state.username}</a>
                    </Navbar.Text>
                : ''}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;