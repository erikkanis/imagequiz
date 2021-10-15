import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Menu = () => {
    const [customer, setCustomer] = useState(localStorage.getItem('customer'));
    //const location = useLocation();

    let logoff = () => {
        localStorage.removeItem('customer');
        setCustomer(undefined);
    }

    // eslint-disable-next-line
    useEffect(  //runs every time return is executed.
        () => {
            setCustomer(localStorage.getItem('customer'));
        }
    );

    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to="/">Practicum</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                {
                    customer ?
                    <Nav.Link as={Link} to="" onClick={logoff}>Log Off</Nav.Link>
                    :
                    <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                }
                <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                {customer ?
                    <Navbar.Text>
                        Signed in as: {customer}
                    </Navbar.Text>
                : ''}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
/*
<Container>
<Navbar.Brand href="/">Practicum</Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end">
<Nav.Link href="/login">Log In</Nav.Link>
<Nav.Link href="/register">Sign Up</Nav.Link>
{(localStorage.getItem('customer')) ?
    <Navbar.Text>
        Signed in as: <a href="/login">{localStorage.getItem('customer')}</a>
    </Navbar.Text>
: ''}
</Navbar.Collapse>
</Container>
*/

export default Menu;