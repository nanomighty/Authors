const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get("/api/author", AuthorController.getAllAuthors);
    app.post("/api/author", AuthorController.createAnAuthor);
    app.get("/api/author/:_id", AuthorController.getAnAuthor);
    app.put("/api/author/:_id", AuthorController.updateAuthor);
    app.delete("/api/author/:_id", AuthorController.deleteAuthor);
}


