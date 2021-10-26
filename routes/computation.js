const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log(req.query)

    if (Object.keys(req.query).length === 0) {
        console.log("Entered")
        let rand = math.random()
        res.render(`computation`, { value: `sqrt applied to ${rand} is ${Math.sqrt(rand)}` })
    } else
        for (let a in req.query) {
            console.log(a)
            res.render(`computation`, { value: `sqrt applied to ${req.query[a]} is ${Math.sqrt(req.query[a])}` })
        }
})

module.exports = router