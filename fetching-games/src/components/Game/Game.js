import React from 'react';

const Game = ({gameName, gameImg, gameRating, index}) => {  
      
    return (
        <>          
            <tr key={index}>
                <td>{gameName}</td>
                <td><img src={gameImg} style={{ width: "200px" }} /></td>
                <td>{gameRating}</td>
            </tr>
        </>
    );
    
}

export default Game;