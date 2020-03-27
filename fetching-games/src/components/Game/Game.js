import React from 'react';

const Game = ({gameName, gameImg, gameRating, index, handleRemoveElement}) => { 
    let removeFromTable = (index) => {
        handleRemoveElement(index);
        // console.log(index);
    }   

    return (
        <>          
            <tr key={index}>
                <td>{gameName}</td>
                <td><img src={gameImg} style={{ width: "200px" }} /></td>
                <td>{gameRating}</td>
                <td>
                    <button value={index} onClick={() => removeFromTable(index)}>Remove</button>
                </td>
            </tr>
        </>
    );    
}

export default Game;