// add middlewares here related to actions
const Action = require('./actions-model');

function validateActionId (req, res, next) {
    //   - If there is no action with the given `id` it responds with a status code 404.
    Action.get(req.params.id)
        .then( response => {
            if (response){
                req.action = response;
                next();
            } else {
                res.status(404).json({ error: `No project with ID ${req.params.id} found` });
            }
        })
        .catch( err => {
            res.status(500).json({ error: err.message });
        })

}

function validateActionBody (req, res, next) {
    console.log('### validateActionBody ###')
    next();
}

module.exports = { validateActionId, validateActionBody }