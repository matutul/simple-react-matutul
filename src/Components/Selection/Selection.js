import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../../Data/playerData.json';
import Player from '../Player/Player';
import './Selection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

const Selection = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const playerData = Data;
        setPlayers(playerData);
    }, []);

    const handlePlayerAdd = (player) => {
        let isListedBefore = 0;
        for (let i = 0; i < cart.length; i++) {
            const playerId = cart[i].id;
            if(playerId == player.id){
                isListedBefore = 1;
                alert('This player is already listed.');
                break;
            }           
        }
        if(isListedBefore == 0){
            const newCart = [...cart, player];
            setCart(newCart);
        }
    }

    const handleDeletePlayer = (deletedPlayer) => {
        const cartForUpdate = [];
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].id != deletedPlayer.id){
                cartForUpdate.push(cart[i]);
            }          
        }
        setCart(cartForUpdate);        
    }

    return (
        <Container className="selection">
            <div className="players">
                <Row>
                    {
                        players.map(player => <Player key={player.id} player={player} handlePlayerAdd={handlePlayerAdd}></Player>)
                    }
                </Row>
            </div>
            <div className="cart">
                <Cart cart={cart} handleDeletePlayer={handleDeletePlayer}></Cart>
            </div>
        </Container>
    );
};

export default Selection;