// import { bgSoundManager } from "./BGSoundManager.js"

class UIV {
    displayPlayerWallet(player) {
      this.walletCountUI = add([
        text(`${player.wallet} / ${player.limit}`, {
          font: "Round",
          size: 50,
        }),
        fixed(),
        pos(1000, 10),
      ])
    }
  
    displayBlinkingUIMessage(content, position) {
      const message = add([
        text(content, { size: 24, font: "Round" }),
        area(),
        anchor("center"),
        pos(position),
        opacity(),
        state("flash-up", ["flash-up", "flash-down"]),
      ])
  
      message.onStateEnter("flash-up", async () => {
        await tween(
          message.opacity,
          0,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-down")
      })
  
      message.onStateEnter("flash-down", async () => {
        await tween(
          message.opacity,
          1,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-up")
      })
    }
  
    displayBlinkingSelectMessage(content, position) {
      const message = add([
        text(content, { size: 55, font: "Round" }),
        area(),
        anchor("center"),
        pos(position),
        opacity(),
        state("flash-up", ["flash-up", "flash-down"]),
      ])
  
      message.onStateEnter("flash-up", async () => {
        await tween(
          message.opacity,
          0,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-down")
      })
  
      message.onStateEnter("flash-down", async () => {
        await tween(
          message.opacity,
          1,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-up")
      })
    }
    displayMainMenu() {
      add([sprite("background"), scale(4)])
      add([
        sprite("background"),
        fixed(),
        area(),
        anchor("center"),
        pos(center().x, center().y - 200),
        scale(8),
      ])
  
      this.displayBlinkingUIMessage(
        "Select [ Story Mode | PVP ]",
        vec2(center().x, center().y + 100)
      )
  
      onKeyPress("enter", () => {
        play("confirm-ui", { speed: 1.5 })
        go("courts")
      })
    }
  
    // selecting courts 
    displayCourtControlsMenu() {
      add([sprite("background"), scale(4)]); 
  
      const controlPrompts = add([pos(center().x, center().y)])
      controlPrompts.add([sprite("court1"), pos(-350, -100), scale(0.3)])
      // controlPrompts.add([sprite("down")])
      controlPrompts.add([sprite("court2"), pos(-40, -90),  scale(0.3)])
      controlPrompts.add([sprite("court3"), pos(300, -100), scale(0.3)])
      // controlPrompts.add([sprite("space"), pos(-200, 0)])
      controlPrompts.add([
        text("court1", { font: "Round", size: 32 }),
        pos(-330, 100),
      ])
      controlPrompts.add([
        text("court2", { font: "Round", size: 32 }),
        pos(10, 100),
      ])
      controlPrompts.add([
        text("court3", { font: "Round", size: 32 }),
        pos(330, 100),
      ])
  
      this.displayBlinkingSelectMessage(
        "SELECT A COURT",
        vec2(center().x, center().y - 200)
      )

      onKeyPress("1", () => {
        go("Family_Justice_Courts")
      })
      onKeyPress("2", () => {
        go("State_Court")
      })
      onKeyPress("3", () => {
        go("Supreme_Court")
      })
    }
  
    // WHEN PLAYER LOSES
    displayYouLost() {
      // bgSoundManager.pauseAllSounds()
      add([rect(1280, 720), color(0, 0, 0)])
      add([
        text("Game Over!", { size: 50, font: "Round" }),
        area(),
        anchor("center"),
        pos(center()),
      ])
  
      this.displayBlinkingUIMessage(
        "Press [ Enter ] to Start Game",
        vec2(center().x, center().y + 100)
      )
  
      onKeyPress("enter", () => {
        // play("confirm-ui")
        go("courts")
      })
    }
  
    // WHEN PLAYER HAS WON ONE COURT
    displayYouWonThisLevel(level) {
      //  bgSoundManager.pauseAllSounds()
        add([rect(1280, 720), color(0, 0, 0)])
        add([
        text(`You Have Summoned Court ${level}`, { size: 50, font: "Round" }),
          area(),
          anchor("center"),
          pos(center()),
        ])
    
        this.displayBlinkingUIMessage(
          "Press [ Enter ] to go to next court.",
          vec2(center().x, center().y + 100)
        )
    
        onKeyPress("enter", () => {
          if (level = "1") {
            go("State_court"); 
          }
          if (level = "2") {
            go("Supreme_court");
          }
          // play("confirm-ui")
        })
      }

    // WHEN PLAYER HAS WON ALL COURTS 
    displayYouWonAllLevels() {
    //  bgSoundManager.pauseAllSounds()
      add([rect(1280, 720), color(0, 0, 0)])
      add([
        text("You Have Summoned All Courts", { size: 50, font: "Round" }),
        area(),
        anchor("center"),
        pos(center()),
      ])
  
      this.displayBlinkingUIMessage(
        "Press [ Enter ] to Play Again",
        vec2(center().x, center().y + 100)
      )
  
      onKeyPress("enter", () => {
        // play("confirm-ui")
        go("courts")
      })
    }
  
    addDarkBg() {
      add([rect(270, 130), color(0, 0, 0), fixed()])
    }
  }
  
  export const court = new UIV()
  