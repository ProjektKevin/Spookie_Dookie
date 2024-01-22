import menuText from "../content/menuText.js";
// import { gameState } from "../state/stateManagers.js";
import { colorizeBackground } from "../utils.js";

export default function mainMenu(k) {

  colorizeBackground(k, 0, 0, 0);

  k.add([
    k.text(menuText.title, { size: 32, font: "gameboy" }),
    k.area(),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y - 100),
  ]);

  k.add([
    k.text(menuText.playIndication, {
      size: 24,
      font: "gameboy",
    }),
    k.area(),
    k.anchor("center"),
    k.pos(k.center().x, k.center().y + 200),
  ]);

  k.onKeyPress("enter", () => {
    k.go("world1");
  });
}
