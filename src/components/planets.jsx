import '../App.css';
import Planet from './planet'
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";

function Planets() {
    const [planets, setPlanets] = useState("");
    const [loading, setLoading] = useState(true);

       useEffect(() => {
        fetch(`https://swapi.dev/api/planets/`)
            .then((response) =>
                response.json())
            .then((actualData) =>
                setPlanets(actualData.results)
            )
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Row xs={1} md={4} className="g-4">
            <Col>
                {!loading && planets.map((planet, i) =>
                    <Planet key={i} id={i} name={planet.name} pop={planet.population}/>
                )}
                </Col>
        </Row>
    );
}

export default Planets;
