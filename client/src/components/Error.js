import React from 'react';
import { Link} from '@reach/router';

const Error = () => {


    return (
        <div>
            <h3>
                We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?
            </h3>
            <Link to="/new"> <p>Add an author</p> </Link>
            <Link to="/"> <p>Home</p> </Link> 
        </div>
    )
};

export default Error;