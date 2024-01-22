import k from "./uiComponents/kaboomContext.js";
import mainMenu from "./scenes/mainMenu.js";
import world1 from "./scenes/world1.js";
// import house from "./scenes/house.js";

k.loadFont("gameboy", "../assets/gb.ttf");
k.loadSprite("assets", "../assets/player.png", {
  sliceX: 7,
  sliceY: 24,
  anims: {
    "player-idle-down": 90,
    "player-down": {
      from: 90,
      to: 95,
      loop: true,
    },
    "player-idle-side": 84,
    "player-side": {
      from: 84,
      to: 89,
      loop: true,
    },
    "player-idle-up": 78,
    "player-up": {
      from: 78,
      to: 83,
      loop: true,
    }
  },
});

const scenes = {
  mainMenu,
  world1,
//   world2,
//   world3,
//   finish,
//   failed
};
for (const sceneName in scenes) {
  k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("mainMenu");
