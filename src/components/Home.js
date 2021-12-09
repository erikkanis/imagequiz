//import { useLocation } from "react-router-dom";
import { useState } from 'react';
//import { Card, Container } from 'react-bootstrap';
import api from "../communication/api";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Row, Col, Image } from "react-bootstrap"

const Home = () => {

    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        if (flowers.length === 0) {
            api.getFlowers().then((x) => {
                setFlowers(x)
            });
        }
    });
    return (
        <Row>
            {flowers.map((flower) => (
                <Col key={flower.name}>
                    <Link to={`/quiz/${flower.name}`}>
                        <Image id="image" src={flower.picture} />
                    </Link>
                    <h3>{flower.name}</h3>
                </Col>
            ))}
        </Row>
    );

    //OLD CODE USING CARDS
    /*const [username] = useState('');
    //const location = useLocation();
    //let flowerGrid = 
    flowers.map(flower => (
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
        <Container style={{ display: "flex", flexWrap: "wrap" }}>{flowers}</Container>
    );
    */
}

export default Home;