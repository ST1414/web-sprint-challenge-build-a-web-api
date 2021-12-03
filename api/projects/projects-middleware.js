// add middlewares here related to projects
const Project = require('./projects-model');

function validateProjectID (req, res, next){
        // - If there is no project with the given `id` it responds with a status code 404.
    Project.get(req.params.id)
        .then( response => {
            if (response) {
                req.project = response
                next();
            } else {
                res.status(404).json({ error: `No project with ID ${req.params.id} found` })
            }
        })
        .catch( err => {
            res.status(500).json({ error: err.message })
        })
}

function validateProject (req, res, next){
    // - If the request body is missing any of the required fields it responds with a status code 400.
    if (!req.body.name || !req.body.description || !req.body.completed){
        res.status(400).json({ error: `Name, description, and completed fields required` })
    } else {
        next();
    }
}

module.exports = { validateProjectID, validateProject }