var express = require('express')
var router = express.Router()
const generateGameList = require('../helpers/generate-game-list')
/* GET games listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.post('/game-list', function (req, res, next) {
  const { body: gameList } = req
  const response = generateGameList(gameList)
  res.send(response)
})
module.exports = router
