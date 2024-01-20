import kaboom from "./libs/kaboom.mjs"

import { Level } from "./utils/Level.js"
import { load } from "./utils/loader.js"

// 1
import { level1Layout, level1Mappings } from "./levels/Family_Justice_Courts/Family_Justice_Courts.js"

kaboom()

load.assets()

const scenes = {
    level1: () => {   
        // UIManager.displayMainMenu()
        const level1 = new Level()
        level1.drawMapLayout(level1Layout, level1Mappings)
    },
    level2: () => {
        // display different courts to select
    },
    level3: () => {
        // level 1
        
    },
    level4: () => {
        // level 2
    },
    level5: () => {
        // level 3
    }
}


for (const key in scenes) {
    scene(key, scenes[key])
}

go("level1")
