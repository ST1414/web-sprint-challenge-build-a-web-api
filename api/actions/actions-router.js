// ----- Imports -----
const express = require('express');
const Action = require('./actions-model');
// const {  } = require('./actions-middlware');


// ----- Set up Router and Endpoints -----
const router = express.Router();


// - [ ] `[GET] /api/actions`
//   - Returns an array of actions (or an empty array) as the body of the response.
router.get('/', (req, res) => {
    res.status(200).json({ message: 'GET Actions'})
})

// - [ ] `[GET] /api/actions/:id`
//   - Returns an action with the given `id` as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.
router.get('/:id', (req, res) => {
    res.status(200).json({ message: 'GET Actions by ID'});
})

// - [ ] `[POST] /api/actions`
//   - Returns the newly created action as the body of the response.
//   - If the request body is missing any of the required fields it responds with a status code 400.
//   - When adding an action make sure the `project_id` provided belongs to an existing `project`.
router.post('/', (req, res) => {
    res.status(200).json({ message: 'POST new Action'});
})

// - [ ] `[PUT] /api/actions/:id`
//   - Returns the updated action as the body of the response.
//   - If there is no action with the given `id` it responds with a status code 404.
//   - If the request body is missing any of the required fields it responds with a status code 400.


// - [ ] `[DELETE] /api/actions/:id`
//   - Returns no response body.
//   - If there is no action with the given `id` it responds with a status code 404.

module.exports = router;