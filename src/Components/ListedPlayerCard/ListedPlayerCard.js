import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './ListedPlayerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ListedPlayerCard = (props) => {
    const { name, img, salary } = props.listedPlayer;
    const handleDeletePlayer = props.handleDeletePlayer;
    return (
        <div>
            <Card className="listedPlayer">
                <Card.Img className="card-image" variant="top" src={img} />
                <Card.Body style={{margin: '0', padding: '0'}}>
                    <p style={{margin: '0'}}>{name}</p>
                    <p style={{margin: '0'}}>Salary: {salary}</p>
                </Card.Body>
                <Button style={{color: 'white'}} onClick={() => handleDeletePlayer(props.listedPlayer)} variant="warning"><FontAwesomeIcon icon={faTrashAlt} /></Button>
            </Card>
        </div>
    );
};

export default ListedPlayerCard;