import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';




const DeleteButton = (props) => {

    const deleteAuthor = (playerId) => {
        axios.delete(`http://localhost:8000/api/author/${playerId}`)
            .then((res) => {
                console.log(res.data);
                // setAllPlayers(allPlayers.filter((player) => player._id !== playerId))
                window.location.reload();
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <button onClick={() => deleteAuthor(props._id)}>Delete</button>
    )
}
export default DeleteButton;