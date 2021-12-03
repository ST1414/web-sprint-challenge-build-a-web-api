// ----- Imports -----
const express = require('express');
const Project = require('./projects-model');
// const {  } = require('./projects-middleware');


// ----- Set up Router and Endpoints -----
const router = express.Router();

router.get('/', (req, res) => {
    // - Returns an array of projects as the body of the response.
    // - If there are no projects it responds with an empty array.
    res.status(200).json({ message: 'GET Projects'});
})

router.get('/:id', (req, res) => {
    // - Returns a project with the given `id` as the body of the response.
    // - If there is no project with the given `id` it responds with a status code 404.
    res.status(200).json({ message: 'GET Project by ID'});
})

router.post('/', (req, res) => {
    // - Returns the newly created project as the body of the response.
    // - If the request body is missing any of the required fields it responds with a status code 400.
    res.status(200).json({ message: 'POST new project'});
})

router.put('/:id', (req, res) => {
    // - Returns the updated project as the body of the response.
    // - If there is no project with the given `id` it responds with a status code 404.
    // - If the request body is missing any of the required fields it responds with a status code 400.
    res.status(200).json({ message: 'PUT update a project'});
})

router.delete('/:id', (req, res) => {
    // - Returns no response body.
    // - If there is no project with the given `id` it responds with a status code 404.
    res.status(200).json({ message: 'DELETE a project'});
})

router.get('/:id/actions', (req, res) => {
    // - Returns an array of actions (could be empty) belonging to a project with the given `id`.
    // - If there is no project with the given `id` it responds with a status code 404.
    res.status(200).json({ message: 'GET project actions'});
})

 module.exports = router;