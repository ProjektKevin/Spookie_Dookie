import { generatePlayerComponents, setPlayerControls} from "../entities/player.js";
import { drawTiles, fetchMapData, colorizeBackground } from "../utils.js";

export default async function world(k) {
    colorizeBackground(k, 128, 128, 128);
    const mapData = await fetchMapData("assets/maps/world1.json");
    const map = k.add([k.pos(0, 0)]);

    const entities = {
        player: null,
        toilet: null
    };

    const layers = mapData.layers;
    console.log(layers);
    for (const layer in layers) {
        if (layer.name === "Boundaries") {
            drawBoundaries(k, map, layer);
            continue;
        }

        if(layer.name == "SpawnPoints") {
            entities.player = map.add(
                generatePlayerComponents(k, k.vec2(layer.objects[0].x, layer.objects[0].y))
            );
            continue;
        }

        if(layer.name == "EndPoints") {
            entities.toilet = map.add([
                k.sprite("assets", { frame: 1 }),
                k.pos(layer.objects[0].x, layer.objects[0].y),
                k.area({ shape: k.vec2(16, 16) }),
                "Toilet"
            ]);
            continue;
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);
    }

    setPlayerControls(k, entities.player);
    entities.player.onCollide("EndPoints", () => k.go("world2"));

    k.camScale(4);
    k.camPos(entities.player.worldPos());
    k.onUpdate(async () => {
        if (entities.player.pos.dist(k.camPos()) > 3) {
            await k.tween(
              k.camPos(),
              entities.player.worldPos(),
              0.15,
              (newPos) => k.camPos(newPos),
              k.easings.linear
            );
        }
    });

}