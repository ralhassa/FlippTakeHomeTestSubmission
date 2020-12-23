import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "../App.css";
import { itemData } from "../data";



function Home() {

    return(
        <div className="home">
            {itemData.map((data, key) => {
                return (
                    <div key={key}>
                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Header>Item</Card.Header>
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Link to={`/details/${data.id}`} value={data.name}> More Details</Link>
                            </Card.Body>
                            <Card.Img variant="top" src={data.image_url} />
                        </Card>
                    </div>
                );
            })}
        </div>

    );
}
export default Home;
