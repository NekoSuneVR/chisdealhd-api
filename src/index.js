module.exports.genshincharacters = function(query) {
    const file = require(`./games/genshin/characters/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.genshinmap = function(query) {
    const file = require(`./games/genshin/maps/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.vrchatfans = function(query) {
    const file = require(`./games/vrchat/players/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.vrchatmaps = function(query) {
    const file = require(`./games/vrchat/maps/${query}`);
    if(!file) return console.log(`404`);

    return file;
}

module.exports.cryptoinfo = function(query) {
    const file = require(`./cryptocurrency/${query}`);
    if(!file) return console.log(`404`);

    return file;
}
