import kaboom from "./libs/kaboom.mjs"
// import { Player } from "./entities/Player.js"
// import { Fish } from "./entities/Fish.js"
// import { Flames } from "./entities/Flames.js"
// import { Spiders } from "./entities/Spiders.js"
// import { Camera } from "./utils/Camera.js"
// import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
// import { level1Config } from "./content/level1/config.js"
// import { level2Config } from "./content/level2/config.js"
import { UIManager } from "./utils/UIManager.js"
// import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js"
// import { Level } from "./utils/Level.js"
// import { Axes } from "./entities/Axes.js"
// import { Saws } from "./entities/Saws.js"
// import { level3Config } from "./content/level3/config.js"
// import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js"
// import { Birds } from "./entities/Birds.js"
import { load } from "./utils/loader.js"
// import { bgSoundManager } from "./utils/BGSoundManager.js"


kaboom()


load.assets()


const scenes = {
    menu: () => {   
        UIManager.displayMainMenu()
    },
    courts: () => {
       UIManager.displayCourtControlsMenu()
//        // display different courts to select
    },
    Family_Justice_Courts: () => {
        // level 1
    },
    State_Court: () => {
        // level 2
    },
    Supreme_Court: () => {
        // level 3
    },
    gameover: async () => UIManager.displayYouLost(),
    end: () => UIManager.displayYouLost(),
}


for (const key in scenes) {
    scene(key, scenes[key])
}
// 
// go("menu")
go("menu")


// yeah the fight ai one
// i think would be good to follow the previous winner a bit
// shdnt be too difficult because we use similar codes to pvp mode
// wait what are the levels for, story mode?
// then, we still doing the 1v1?
// KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN KEVIN