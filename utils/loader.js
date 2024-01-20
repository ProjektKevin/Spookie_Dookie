export const load = {
    // fonts: () => {
    //   loadFont("Round", "./assets/Round9x13.ttf")
    // },
    assets: () => {
      // for player 1 goblins (click to spawn)

      // loadSprite("bg1", "../assets/bg1.png")
        //   loadSprite("goblinTorcher", "./assets/Torch_Red.png")
        //   loadSprite("goblinBomber", "./assets/TNT_Red.png")
        //   loadSprite("goblinIcon1", "./assets/Arrow_Up_Key_Dark.png")
        //   loadSprite("goblinIcon1", "./assets/Arrow_Up_Key_Dark.png")
        //   loadSprite("goblinIcon1", "./assets/Arrow_Up_Key_Dark.png")
        //   loadSprite("goblinIcon1", "./assets/Arrow_Up_Key_Dark.png")

        // level sprites
        loadSprite("tileset", "./assets/tileset.png", {
          sliceX: 3,
          sliceY: 3,
          anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              br: 6,
              bm: 7,
              bl: 8,
          }
      })

      // once they spawn - entities
      loadSprite("goblinTorcher", "./assets/Torch_Red.png", {
        sliceX: 7,
        sliceY: 5,
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
      loadSprite("goblinHouse", "./assets/Goblin_House.png", {
          sliceX: 1,
          sliceY: 1,
      })

    //   loadSprite("goblin", "./assets/goblin.png", {
    //     sliceX: 4,
    //     sliceY: 6,
    //     anims: {
    //       idle: {
    //         from: 0,
    //         to: 3,
    //         loop: true,
    //       },
    //       run: {
    //         from: 4,
    //         to: 7,
    //         loop: true,
    //       },
    //       "jump-up": 8,
    //       "jump-down": 9,
    //     },
    //   })
    //   loadSprite("goblin", "./assets/goblin.png", {
    //     sliceX: 4,
    //     sliceY: 6,
    //     anims: {
    //       idle: {
    //         from: 0,
    //         to: 3,
    //         loop: true,
    //       },
    //       run: {
    //         from: 4,
    //         to: 7,
    //         loop: true,
    //       },
    //       "jump-up": 8,
    //       "jump-down": 9,
    //     },
    //   })
    //   loadSprite("goblin", "./assets/goblin.png", {
    //     sliceX: 4,
    //     sliceY: 6,
    //     anims: {
    //       idle: {
    //         from: 0,
    //         to: 3,
    //         loop: true,
    //       },
    //       run: {
    //         from: 4,
    //         to: 7,
    //         loop: true,
    //       },
    //       "jump-up": 8,
    //       "jump-down": 9,
    //     },
    //   })
    //   loadSprite("goblin", "./assets/goblin.png", {
    //     sliceX: 4,
    //     sliceY: 6,
    //     anims: {
    //       idle: {
    //         from: 0,
    //         to: 3,
    //         loop: true,
    //       },
    //       run: {
    //         from: 4,
    //         to: 7,
    //         loop: true,
    //       },
    //       "jump-up": 8,
    //       "jump-down": 9,
    //     },
    //   })
    //   loadSprite("goblin", "./assets/goblin.png", {
    //     sliceX: 4,
    //     sliceY: 6,
    //     anims: {
    //       idle: {
    //         from: 0,
    //         to: 3,
    //         loop: true,
    //       },
    //       run: {
    //         from: 4,
    //         to: 7,
    //         loop: true,
    //       },
    //       "jump-up": 8,
    //       "jump-down": 9,
    //     },
    //   })


      // load bases
     // loadSprite("base1", "./assets/bg1.png")
    //   loadSprite("base2", "./assets/Coins_Ui.png")
    //   loadSprite("base3", "./assets/Coins_Ui.png")
  //    loadSprite("basePlayer1", "./assets/base.png")
    //   loadSprite("basePlayer2", "./assets/Coins_Ui.png")


      // others
  //    loadSprite("back_botton", "./assets/Arrow.png")
      // loadSprite("level_building", "./assets/Coins_Ui.png")
      loadSprite("upgrade_botton", "./assets/tileset.png")
      loadSprite("background", "../assets/parlimant.png")
      loadSprite("court1", "../assets/family.png")
      loadSprite("court2", "../assets/jail.png")
      loadSprite("court3", "../assets/redStar.png")

      // ui sprites
      loadSprite("button", "../assets/Button_Blue.png")
      loadSprite("button-pressed", "../assets/Button_Blue_Pressed.png")

}
}