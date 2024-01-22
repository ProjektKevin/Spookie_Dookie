import { areAnyOfTheseKeysDown, playAnimIfNotPlaying } from "../utils.js";

export function generatePlayerComponents(k, pos) {
    return [
        k.sprite("assets", {
            anim: "player-idle-down",
        }),
        k.area({shape: new k.Rect(k.vec2(3, 4), 10, 12)}),
        k.body(),
        k.pos(pos),
        k.opacity(),
        {
            speed: 100,
            direction: "down",
            isFrozen: false,
        },
        "player",
    ];
}

export function setPlayerControls(k, player) {
    k.onKeyDown((key) => {
        if (k.isKeyDown("space")) return;
        if (["left"].includes(key)) {
            if (areAnyOfTheseKeysDown(k, ["up", "down"])) return;
            player.flipX = true;
            playAnimIfNotPlaying(player, "player-side");
            player.move(-player.speed, 0);
            player.direction = "left";
            return;
        }

        if (["right"].includes(key)) {
            if (areAnyOfTheseKeysDown(k, ["up", "down"])) return;
            player.flipX = false;
            playAnimIfNotPlaying(player, "player-side");
            player.move(player.speed, 0);
            player.direction = "right";
            return;
        }

        if (["up"].includes(key)) {
            playAnimIfNotPlaying(player, "player-up");
            player.move(0, -player.speed);
            player.direction = "up";
            return;
        }
      
        if (["down"].includes(key)) {
            playAnimIfNotPlaying(player, "player-down");
            player.move(0, player.speed);
            player.direction = "down";
            return;
        }
    });
}