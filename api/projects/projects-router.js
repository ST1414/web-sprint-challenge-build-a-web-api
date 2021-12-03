// ----- Imports -----
const express = require('express');
const Project = require('./projects-model');
const { validateProjectID, validateProject } = require('./projects-middleware');


//throw new Error("!!! KABOOM !!!")
// ----- Set up Router and Endpoints -----
const router = express.Router();

router.get('/', (req, res) => {
    // x Returns an array of projects as the body of the response. 
    // x If there are no projects it responds with an empty array.    
    Project.get()
    .then( response => {
        res.status(200).json(response)
    })
    .catch( err => {
        res.status(500).json({ error: err.message });
    })

})

router.get('/:id', validateProjectID, (req, res) => {
    // x Returns a project with the given `id` as the body of the response.
    // x If there is no project with the given `id` it responds with a status code 404.
    res.status(200).json(req.project)

})

router.post('/', validateProject, (req, res) => {
    // x Returns the newly created project as the body of the response.
    // x If the request body is missing any of the required fields it responds with a status code 400.
    Project.insert(req.body)
    .then( response => {
            res.status(201).json(response);
        })
        .catch( err => {
            res.status(500).json({ error: err.message});
        })
})

router.put('/:id', validateProjectID, validateProject, (req, res) => {
    // - Returns the updated project as the body of the response.
    // - If there is no project with the given `id` it responds with a status code 404.
    // - If the request body is missing any of the required fields it responds with a status code 400.
    Project.update(req.params.id, req.body)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({error: err.message})
        })

})

router.delete('/:id', validateProjectID, (req, res) => {
    // - Returns no response body.
    // - If there is no project with the given `id` it responds with a status code 404.
    Project.remove(req.params.id)
        .then( response => {
            res.status(204).json();
        })
        .catch( err => {
            res.status(500).json({ error: err.message});
        })
})

router.get('/:id/actions', validateProjectID, (req, res) => {
    // - Returns an array of actions (could be empty) belonging to a project with the given `id`.
    // - If there is no project with the given `id` it responds with a status code 404.
    Project.getProjectActions(req.params.id)
        .then( response => {
            res.status(200).json(response)
        })
        .catch( err => {
            res.status(500).json({ error: err.message })
        })
})

 module.exports = router;