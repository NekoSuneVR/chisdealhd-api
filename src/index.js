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