import '../App.css';
import {useState} from "react";
import placeholder from '../logo.svg'

function Planet(props) {
    const [planet] = useState({name: props.name, population: props.pop});

    return (
        <div>
            <img src={placeholder} alt={'placeholder'} width={150} height={150}/>
            <p>{planet.name}</p>
            <p>population: {planet.population}</p>
        </div>
    );
}

export default Planet;
