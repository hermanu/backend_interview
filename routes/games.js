var express = require('express')
var router = express.Router()
const generateGameList = require('../helpers/game-helper')
/* GET games listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/game-list', function (req, res, next) {
  const { body: params } = req
  let response = generateGameList(params)
  res.send(response)
})
module.exports = router
