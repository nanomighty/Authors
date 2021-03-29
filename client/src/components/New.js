import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const New = (props) => {
    // const [licensed, setLicensed] = useState(true);
    // const [title, setTitle] = useState("");
    // const [artist, setArtist] = useState("");
    // const [albumArtUrl, setAlbumUrl] = useState("");
    // const [videoUrl, setVideoUrl] = useState("");
    // const [genre, setGenre] = useState("Rap");
    // const [year, setYear] = useState("");

    const [author, setAuthor] = useState("");
    const [errs, setErrs] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author', {
            author,
        })
            .then((res) => {
                if (res.data.errors){
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data);
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
            <p>Add a new author:</p>
            <form className="border" onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" 
                        name="author"
                        value={author}
                        onChange = {(e) => setAuthor(e.target.value) }
                    />
                    {
                        errs.author ?
                            <span className="error-text">{errs.author.message}</span> :
                            null
                    }
                </div>
                {/* <div>
                    <input type="checkbox"
                        name="licensed"
                        checked={licensed}
                        onChange = {() => setLicensed(!licensed) }
                    />
                    <label>Is Licensed?</label>
                </div>
                <div>
                    <label>Title: </label>
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {
                        errs.title ? 
                        <span className="error-text">{errs.title.message}</span> :
                        null
                    }
                </div>
                <div>
                    <label>Artist: </label>
                    <input type="text"
                        name="artist"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />
                    {
                        errs.artist ?
                            <span className="error-text">{errs.artist.message}</span> :
                            null
                    }
                </div>
                <div>
                    <label>Album Art URL: </label>
                    <input type="text"
                        name="albumArtUrl"
                        value={albumArtUrl}
                        onChange={(e) => setAlbumArtUrl(e.target.value)}
                    />
                    {
                        errs.albumArtUrl ?
                            <span className="error-text">{errs.albumArtUrl.message}</span> :
                            null
                    }
                </div>
                <div>
                    <label>Video URL: </label>
                    <input type="text"
                        name="videoUrl"
                        value={videoUrl}
                        onChange={(e) => setVideoURL(e.target.value)}
                    />
                    {
                        errs.videoUrl ?
                            <span className="error-text">{errs.videoUrl.message}</span> :
                            null
                    }
                </div>
                <div>
                    <label>Genre: </label>
                    <select
                        name="genre"
                        value={genre}
                        onChange={(e) => SVGPathSegLinetoHorizontalRel(e.target.value)}
                        >
                        <option value="Pop">Pop</option>
                        <option value="Country">Country</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Rap">Rap</option>
                        <option value="Classical">Classical</option>
                        <option value="Techno">Techno</option>
                        <option value="Gospel">Gospel</option>
                        <option value="Rock">Rock</option>
                    </select>
                </div>
                <div>
                    <label>Year: </label>
                    <input type="number"
                        name="year"
                        min="1930"
                        checked={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    {
                        errs.year ?
                            <span className="error-text">{errs.year.message}</span> :
                            null
                    }
                </div> */}
                <br />
                <div>
                    <button onClick={ () => navigate("/")}> Cancel </button>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>
    )
};

export default New;