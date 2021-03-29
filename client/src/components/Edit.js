import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {

    const [author, setAuthor] = useState("");
    const [errs, setErrs] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props._id)
            .then((res) => {
                if (res.data.author){
                    setAuthor(res.data.author)
                } else {
                    navigate("/error");
                }

            })
            .catch((err) => {
                console.log (err);
            })
    }, [props._id]);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/author/' + props._id, {
            author,
        })
            .then((res) => {
                if (res.data.errors) {
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <Link to="/"> <p>Home</p> </Link>
            <p>Edit this author: </p>
            <form className="border" onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {
                        errs.author ?
                            <span className="error-text">{errs.author.message}</span> :
                            null
                    }
                </div>
                <br />
                <div>
                    <Link to="/"><button> Cancel </button></Link>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
};

export default Edit;