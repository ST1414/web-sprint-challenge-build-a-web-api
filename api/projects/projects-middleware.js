// add middlewares here related to projects
const Project = require('./projects-model');

function validateProjectID (req, res, next){
    Project.get(req.params.id)
        .then( response => {
            if (response) {
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
    console.log('\n* MW: Validating Project *')
    next();
}