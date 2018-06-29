let generateGameList = params => {
  const { items, games } = params
  let response = Object.assign({ categories: [] })
  items.forEach(item => {
    let { label, games: itemGames } = item

    // Create label for category and push it with a games array
    response.categories.push({ label, games: [] })

    // Select the category that we just push
    // TODO: Find another way?
    var [currentCategory] = response.categories.filter(
      category => category.label === label
    )

    // Loop each game inside the item
    itemGames.forEach(itemGame => {
      let gameWithTag = assignTagToGame(games, itemGame)
      currentCategory.games.push(gameWithTag)
    })
  })
  return response
}

// Search for the game on the gameList and sets the tag
let assignTagToGame = (gameList, game) => {
  let [currentGame] = gameList.filter(g => g.name === game.name)
  currentGame.tag = game.tag

  // Transform properties to lower case and replace blank spaces
  transFormGameCustomProps(currentGame)
  return currentGame
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
