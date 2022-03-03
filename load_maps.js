import { createRequire } from "module";
const require = createRequire(import.meta.url);

class Map {
    constructor(file,name,aliases = [],bitAccessible = false) {
        this.file = file;
        this.name = name;
        this.aliases = aliases;
        this.aliases.push(name.toLowerCase());
        this.bitAccessible = bitAccessible;
        this.sceneFlags = [];
        this.grabFlags()
    }
    

    grabFlags() {
        this.sceneFlags = require('./json_flag_sheets/' + this.file)
    }
}

const maps = [
    new Map("skyloft.json",'Skyloft',[],true),
    new Map("sealedgrounds.json",'Sealed Grounds',["sg","btt","behind the temple"],true),
    new Map("sky.json",'Sky',["the sky"],true),
    new Map("faronwoods.json",'Faron Woods',['faron','woods','faron main'],true),
    new Map("lakefloria.json",'Lake Floria',['floria','lake','floria waterfall','waterfall'],true),
    new Map("farontrial.json",'Faron Silent Realm',["faron trial",'trial']),
    new Map("eldinvolcano.json",'Eldin Volcano',['eldin','volcano','mogma turf']),
    new Map('lanayrudesert.json','Lanayru Desert',['lanayru','desert','nodes']),
    new Map('sandsea.json','Lanayru Sand Sea',['sand sea','sea','sandsea']),
    new Map('bokobasesummit.json',"Bokoblin Base / Volcano Summit",['boko base','bokoblin base','summit','volcano summit','vs']),
    new Map('lanayrugorge.json','Lanayru Gorge',['gorge']),
    new Map('floodedfaronwoods.json','Flooded Faron Woods',['ffw']),
    new Map('skyview.json','Skyview Temple',['skyview','sv']),
    new Map('earthtemple.json','Earth Temple',['et']),
    new Map('lanayruminingfacility.json','Lanayru Mining Facility',['lmf']),
    new Map('ancientcistern.json','Ancient Cistern',['ac','cistern']),
    new Map('sandship.json','Sandship',['ss','ssh']),
    new Map('firesanctuary.json','Fire Sanctuary',['fs','sanctuary','sanc']),
    new Map('skykeep.json','Sky Keep',['skykeep','sk','skeep']),
];

export {maps};


