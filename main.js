const {maps} = require('./load_maps.js');

/**
     * Finds the event associated with a given scene flag index on a given map.
     * @param {string} flag - Index of the scene flag needed, in the form (last digit of byte)x(hex representation of bit), like 7x04 or 2x20.
     * @param {string} mapName - Name of the map whose scene flags are desired.
     * @return {string} The action associated with the given scene flag index
     */
function flagToEvent(flag,mapName) {
    for (const i of maps) {
        if (i.aliases.includes(mapName.toLowerCase().trim())) {
            if (typeof i.sceneFlags[flag] == 'undefined') {
                throw 'Invalid flag: ' + flag
            }
            return i.sceneFlags[flag]
        }
    }
    throw 'Unknown map: ' + mapName
}

/**
 * Finds the events associated with a given scene flag on maps which are accessible in Back in Time (with the exception of the Faron Silent Realm).
 * @param {string} flag - Index of the scene flag needed, in the form (last digit of byte)x(hex representation of bit), like 7x04 or 2x20. 
 * @return {array} An array of all BiT-accessible maps that have the flag along with the action associated with the flag.
 */
function getBiTInfo(flag) {
    var returnArray = []
    for (const i of maps) {
        if (typeof i.sceneFlags[flag] === 'undefined') {
            throw 'Invalid flag: ' + flag
        }
        if (i.bitAccessible && i.sceneFlags[flag] !== '') {
            returnArray.push(i.name + ': ' + i.sceneFlags[flag])
        }
    }
    return returnArray
}
/**
 * Finds the indices of a given scene flag action on a given map.
 * @param {string} searchTerm - Terms to search for in the map's scene flags. If searchTerm appears in a scene flag's action description, its index will be returned.
 * @param {string} mapName - Name of the map whose scene flags are desired.
 * @param {boolean} verbose - If true, the action associated with matching flags will also be returned.
 * @return {array} An array of all matching scene flag indices (and actions if verbose is true).
 */
function lookupFlag(searchTerm,mapName,verbose = false) {
    var returnArray = []
    for (const i of maps) {
        if (i.aliases.includes(mapName.toLowerCase().trim())) {
            for (let [flag, action] of Object.entries(i.sceneFlags)) {
                if (action.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    returnArray.push(verbose ? (flag + ': ' + action) : (flag))
                }
            }
            return returnArray
        }
    }
    throw 'Unknown map: ' + mapName
}

console.log(flagToEvent('7x04','sg'))
console.log(getBiTInfo('5x02'))
console.log(lookupFlag('shed','skyloft',true))
module.exports = {flagToEvent, getBiTInfo, lookupFlag};
