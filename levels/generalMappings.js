export function generateMappings() {
    // load tiles

    return {
        "0": () => [
            sprite(`tileset`, { anim: "tl" }),
            area(),
            body({ isStatic: true })
        ],
        "1": () => [
            sprite(`tileset`, { anim: "tm" }),
            area(),
            body({ isStatic: true })
        ],
        "2": () => [
            sprite(`tileset`, { anim: "tr" }),
            area(),
            body({ isStatic: true })
        ],
        "3": () => [
            sprite(`tileset`, { anim: "ml" }),
            area(),
            body({ isStatic: true })
        ],
        "4": () => [
            sprite(`tileset`, { anim: "mm" }),
            area(),
            body({ isStatic: true })
        ],
        "5": () => [
            sprite(`tileset`, { anim: "mr" }),
            area(),
            body({ isStatic: true })
        ],
        "6": () => [
            sprite(`tileset`, { anim: "bl" }),
            area(),
            body({ isStatic: true })
        ],
        "7": () => [
            sprite(`tileset`, { anim: "bm" }),
            area(),
            body({ isStatic: true })
        ],
        "8": () => [
            sprite(`tileset`, { anim: "br" }),
            area(),
            body({ isStatic: true })
        ],
        "9": () => [
            sprite(`goblinHouse`),
            area(),
            body({ isStatic: true })
        ],
        "^": () => [  
          sprite(`goblinTorcher`, { anim: "walk" }),
          area(),
          body({ isStatic: true })
        ],
    }
  }

  
/*
  ref:

  loadSprite("goblinTorcher", "./assets/Torch_Red.png", {
        sliceX: 5,
        sliceY: 7,
        anims: {
          idle: {
            from: 0,
            to: 6,
            loop: true,
          },
          walk: {
            from: 7,
            to: 12,
            loop: true,
          },
          attack: {
            from: 13,
            to: 18,
            loop: true
          }
        },
      })

  */