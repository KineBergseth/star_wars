import '../App.css';
import {useState} from "react";
import Card from 'react-bootstrap/Card';

function Planet(props) {
    const [planet] = useState({name: props.name,population: props.pop});

    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text>
                        population: {planet.population}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Planet;
