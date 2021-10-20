//import { useLocation } from "react-router-dom";
//import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import flowers from "../data";
import { Link } from 'react-router-dom';

const Home = () => {

    //const [username] = useState('');
    //const location = useLocation();

    let flowerGrid = flowers.map(flower => (
        <Link to={"/quiz"} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flower.picture} />
                <Card.Body>
                    <Card.Title>{flower.name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    ));

    return (
        <Container style={{display:"flex", flexWrap:"wrap"}}>{flowerGrid}</Container>
    );
}

export default Home;