import '../App.css';
import Planet from './planet'
import {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";

function Planets() {
    const [planets, setPlanets] = useState("");
    const [loading, setLoading] = useState(true);

       useEffect(() => {
        fetch(`https://swapi.dev/api/planets/`)
            .then((response) =>
                response.json())
            .then((data) => {
                    setPlanets(data.results)
                    console.log(data.results)
                }
            )
            .catch((error) => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <ListGroup>
            {!loading && planets.map((planet, i) =>
                <ListGroup.Item key={i}>
                    <Planet key={i} id={i} name={planet.name} pop={planet.population}/>
                </ListGroup.Item>
            )}
            </ListGroup>
        </div>
    );
}

export default Planets;
