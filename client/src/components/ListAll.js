import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';


const ListAll = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/author")
            .then( (res) => {
                setAllAuthors(res.data);
            })
            .catch( (err) => {
                console.log(err);
            })
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/author/${ authorId }`)
            .then((res) => {
                console.log(res.data);
                setAllAuthors(allAuthors.filter((author) => author._id !== authorId))
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div>
            <Link to="/new"> <p>Add an author</p> </Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions available</th>
                </thead>
                <tbody>
                    {
                        allAuthors.map( (author, index) => (
                            <tr key={index}>
                                <td>{author.author}</td>
                                <td>
                                <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                                    <button onClick={() => deleteAuthor(author._id) }>Delete</button>
                                    {/* <DeleteButton _id={player._id} /> */}
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
};

export default ListAll;