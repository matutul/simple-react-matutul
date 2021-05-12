import React from 'react';
import './Player.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
    const { full_name, img, playing_role, batting_style, balling_style, salary } = props.player;
    const handlePlayerAdd = props.handlePlayerAdd;
    return (
        <Card className="player-card" style={{ width: '18rem', margin: '2rem', padding: 0, borderRadius: '10px' }}>
            <Card.Img style={{overflow: 'hidden', borderRadius: '10px 10px 0 0'}} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{full_name}</Card.Title>
                <Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Player Role: {playing_role}</ListGroup.Item>
                        <ListGroup.Item>Batting Style: {batting_style}</ListGroup.Item>
                        <ListGroup.Item>Balling Style: {balling_style}</ListGroup.Item>
                        <ListGroup.Item>Salary: {salary}</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <Button variant="info" style={{color: 'white'}} onClick={() => handlePlayerAdd(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
            </Card.Body>
        </Card>
    );
};

export default Player;