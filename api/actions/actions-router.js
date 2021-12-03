// ----- Imports -----
const express = require('express');
const Action = require('./actions-model');
const { validateActionId, validateActionBody, validateActionProjectId } = require('./actions-middlware');

// ----- Set up Router and Endpoints -----
const router = express.Router();


router.get('/', (req, res) => {
    // - [ ] `[GET] /api/actions`
    //   - Returns an array of actions (or an empty array) as the body of the response.
    Action.get()
        .then( response => {
            res.status(200).json(response);
        })
        .catch( err => {
            res.status(500).json({ error: err.message });
        })
})

router.get('/:id', validateActionId, (req, res) => {
    // - [ ] `[GET] /api/actions/:id`
    //   - Returns an action with the given `id` as the body of the response.
    //   - If there is no action with the given `id` it responds with a status code 404.
    res.status(200).json(req.action);
})

router.post('/', validateActionBody, validateActionProjectId, (req, res) => {
    // - [ ] `[POST] /api/actions`
    //   - Returns the newly created action as the body of the response.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    //   - When adding an action make sure the `project_id` provided belongs to an existing `project`.
    Action.insert(req.body)
        .then( response => {
            res.status(201).json(response);
        })
        .catch( err => {
            res.status(500).json({ error: err.message});
        })
})

router.put('/:id', validateActionId, validateActionBody, validateActionProjectId, (req, res) => {
    // - [ ] `[PUT] /api/actions/:id`
    //   - Returns the updated action as the body of the response.
    //   - If there is no action with the given `id` it responds with a status code 404.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    Action.update(req.params.id, req.body)
        .then( response => {
            res.status(200).json(response);
        })
        .catch( err => {
            res.status(500).json({ error: err.message});
        })
})

// - [ ] `[DELETE] /api/actions/:id`
//   - Returns no response body.
//   - If there is no action with the given `id` it responds with a status code 404.
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: 'DELETE Action by ID'});
})

module.exports = router;