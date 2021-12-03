// add middlewares here related to actions
const Action = require('./actions-model');
const Project = require('../projects/projects-model');

function validateActionId (req, res, next) {
    //   - If there is no action with the given `id` it responds with a status code 404.
    Action.get(req.params.id)
        .then( response => {
            if (response){
                req.action = response;
                next();
            } else {
                res.status(404).json({ error: `No action with ID ${req.params.id} found` });
            }
        })
        .catch( err => {
            res.status(500).json({ error: err.message });
        })

}

function validateActionBody (req, res, next) {
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    if (!req.body.project_id || ! req.body.description || !req.body.notes || req.body.completed === undefined){
        res.status(400).json({ error: `Project ID, description, notes, and completed fields required`})
    } else {
        next();
    }
}

function validateActionProjectId (req, res, next) {
    Project.get(req.body.project_id)
    .then( response => {
        if (response) {
            req.project = response
            next();
        } else {
            res.status(404).json({ error: `No project with ID ${req.body.project_id} found` });
        }
    })
    .catch( err => {
        res.status(500).json({ error: err.message })
    })
}

module.exports = { validateActionId, validateActionBody, validateActionProjectId }