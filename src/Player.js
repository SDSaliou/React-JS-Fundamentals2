import React from "react";
import players from "./players";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
    return (
        <Card style={{ width: "18rem", margin: "20px", textAlign: "center" }}>
            <Card.Img  className="card-img" variant="top" src={imageUrl} alt={name} />
            <Card.Body>
                <Card.Title style={{color:"rgb(0, 123, 255)"}}>{name}</Card.Title>
                <Card.Text className="Ca">
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    jerseyNumber: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default Player;
