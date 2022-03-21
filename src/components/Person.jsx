import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import img from "./obiWan.jpg"


const Person = (props) => {
    const [result, setResult] = useState({});
    const { id } = useParams();

    useEffect(() => {

        axios.get("https://swapi.dev/api/people/" + id)
            .then(res => {
                console.log(res.data);
                setResult(res.data);
            })
            .catch(err => {
                console.log(err);
                setResult(null);

            })

    }, [id])

    return (
        <>
        {result?
            <div>
                <h1>{result.name}</h1>
                <h2>Height:{result.height}</h2>
                <h2>Mass:{result.mass}</h2>
                <h2>Hair Color:{result.hair_color}</h2>
                <h2>Skin Color:{result.skin_color}</h2>
            </div>:
            <div>
                <p>These aren't the driods you are looking for</p>
                <img src={img}></img>
                <img src="luke_apiwalker\src\components\obiWan.jpg"></img>
            </div>
        }
        </>
    )
}

export default Person