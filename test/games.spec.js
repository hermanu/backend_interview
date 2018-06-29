const expect = require("chai").expect;

describe("Games Tests", () => {
  const generateGameList = require("../helpers/generate-game-list");
  const input = require("./mocks/input.json");
  it("Should return a valid response", () => {
    let gameList = generateGameList(input);
    expect(gameList).to.not.be.undefined;
    expect(gameList).to.have.property("categories");
    expect(gameList.categories).to.be.an("Array");
    expect(gameList.categories.length).to.be.greaterThan(0);

    expect(gameList.categories[0]).to.have.property("label");
    expect(gameList.categories[0].label).to.be.an("String");

    expect(gameList.categories[0]).to.have.property("games");
    expect(gameList.categories[0].games).to.be.an("Array");
    expect(gameList.categories[0].games[0]).to.be.an("Object");
    expect(gameList.categories[0].games[0]).to.haveOwnProperty("name");

    expect(gameList.categories[0].games[0]).to.haveOwnProperty("customProp1").to.be.an('String').and.match(/^[a-z-]*$/)
    expect(gameList.categories[0].games[0]).to.haveOwnProperty("customProp2").to.be.an('String').and.match(/^[a-z-]*$/)
    expect(gameList.categories[0].games[0]).to.haveOwnProperty("tag").to.be.an('String')

    expect(gameList.categories[0].games[1]).to.haveOwnProperty("customProp1").to.be.an('String').and.match(/^[a-z-]*$/)
    expect(gameList.categories[0].games[1]).to.haveOwnProperty("customProp2").to.be.an('String').and.match(/^[a-z-]*$/)
    expect(gameList.categories[0].games[1]).to.haveOwnProperty("tag").to.be.an('String')

    expect(gameList.categories[1].games[0]).to.haveOwnProperty("customProp1").to.be.an('String').and.match(/^[a-z-]*$/)
    expect(gameList.categories[1].games[0]).to.haveOwnProperty("customProp2").to.be.an('String').and.match(/^[a-z-]*$/)
    
    

  });
});
