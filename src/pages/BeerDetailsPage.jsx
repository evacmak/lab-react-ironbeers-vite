import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BeerDetailsPage() {
    const [detail, setDetails] = useState(null);
    const {beerId} = useParams();

    const getDetails = async (_id) => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`);
            setDetails(response.data)
        } catch (error) {
            console.log('error fetching details', error)
        }
    }

    useEffect (() => {
        getDetails(beerId)
    }, [beerId]);

    return (
        <div>
            <img src={beerId.image} alt="beer image" />
            <h1>{beerId.name}</h1>
            <h2>{beerId.tagline}</h2>
            <h3>{beerId.first_brewed}</h3>
            <h3>{beerId.attenuation_level}</h3>
            <p>{beerId.description}</p>
            <p>{beerId.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
