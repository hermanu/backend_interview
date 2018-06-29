let generateGameList = params => {
  const { items, games } = params
  let response = Object.assign({ categories: [] })
  
  for (let i = 0; i < items.length; i++) {
    let { label, games: itemGames } = items[i]
    response.categories.push({ label, games: [] })
    for (let j = 0; j < itemGames.length; j++) {
      let gameWithTag = assignTagToGame(games, itemGames[j])
      response.categories[i].games.push(gameWithTag)
    }
  }
  return response
}

// Search for the game on the gameList and sets the tag
let assignTagToGame = (gameList, itemGame) => {
  for (const game of gameList) {
    if (game.name === itemGame.name ){
      var updatedGame = Object.assign(game, itemGame, {tag: itemGame.tag})
      transFormGameCustomProps(updatedGame)
      break;
    }
  }
  return updatedGame
}

// Loops each property of object and replaces the needed ones
let transFormGameCustomProps = game => {
  let customPropsFilter = /custom/
  Object.keys(game).forEach(key => {
    if (customPropsFilter.test(key)) {
      game[key] = game[key].toLowerCase().replace(/ /g, '-')
    }
  })
  return game
}

module.exports = generateGameList
