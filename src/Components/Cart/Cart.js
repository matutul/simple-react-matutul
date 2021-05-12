import React from 'react';
import './Cart.css';
import ListedPlayerCard from '../ListedPlayerCard/ListedPlayerCard';


const Cart = (props) => {
    const listedPlayers = props.cart;
    let totalSalary = 0.00;
    for (let i = 0; i < listedPlayers.length; i++) {
        totalSalary = totalSalary + parseFloat(listedPlayers[i].salary.slice(1, listedPlayers[i].salary.length));        
    }
    return (
        <div className="card-div" style={{ position: 'sticky', top: '70px', height: '80vh'}}>
            <div className="team-card" style={{position: 'relative', paddingBottom: '50px'}}>
                <h2>Team Players: {listedPlayers.length}</h2>
                <div className="player-list">
                    {
                        listedPlayers.map(player => <ListedPlayerCard key={player.id} listedPlayer={player} handleDeletePlayer={props.handleDeletePlayer}></ListedPlayerCard>)
                    }
                </div>
                <h4 className="total-salary" style={{color: 'white'}}>Total salary: ${totalSalary.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;