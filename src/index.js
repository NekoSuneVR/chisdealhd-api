module.exports.genshincharacters = function(query) {
    const file = require(`./genshin/characters/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.genshinmap = function(query) {
    const file = require(`./genshin/maps/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.vrchatfans = function(query) {
    const file = require(`./vrchat/players/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.vrchatmaps = function(query) {
    const file = require(`./vrchat/maps/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.gamesdatamaps = function(game, query) {
    const file = require(`./games/${game}/maps/${query}`);
    if(!file) return console.log(`404`);

    return file;
}


module.exports.gamesdata = function(game, query) {
    const file = require(`./games/${game}/${query}`);
    if(!file) return console.log(`404`);

    return file;
}


module.exports.cryptoinfo = function(query) {
    const file = require(`./cryptocurrency/${query}`);
    if(!file) return console.log(`404`);

    return file;
}
