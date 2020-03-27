import React from 'react';

const Game = ({gameName, gameImg, gameRating, index}) => {  
      
    return (
        <div className="container mb-10">
            <table className="responsive-table centered highlight">
                <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Game Image</th>
                        <th>Game Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={index}>
                        <td>{gameName}</td>
                        <td><img src={gameImg} style={{ width: "200px" }} /></td>
                        <td>{gameRating}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default Game;