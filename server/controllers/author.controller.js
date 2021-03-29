const Author = require('../models/author.model');

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find({})
            .sort({author: "ascending"})
            .then(authors => {res.json(authors)})
            .catch(err => {
                console.log("error found in getAllAuthors");
                res.json(err);
            });
    },
    createAnAuthor: (req, res) => {
        const { author } = req.body;
        Author.create({
            author,
        })
            .then((newAuthor) => {
                res.json(newAuthor);
            })
            .catch((err) => {
                console.log("error found in createAnAuthor");
                res.json(err);
            });
    },
    getAnAuthor: (req, res) => {
        Author.findOne({_id: req.params._id})
            .then(author => {res.json(author)})
            .catch(err => {
                console.log("error found in getAnAuthor");
                res.json(err);
            });
    },
    updateAuthor : (req, res) => {
        Author.findOneAndUpdate( {_id: req.params._id}, req.body, {
            new: true,
            runValidators: true,
        })
                .then(updatedAuthor => {res.json(updatedAuthor)})
                .catch(err => {
                    console.log("error found in updateAuthor");
                    res.json(err);
                });
    },
    deleteAuthor : (req, res) => {
        Author.deleteOne({_id: req.params._id})
            .then(deletedAuthor => {res.json(deletedAuthor)})
            .catch(err => {
                console.log("error found in deleteAuthor");
                res.json(err);
            });
    }
}