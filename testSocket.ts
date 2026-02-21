import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import crypto from "crypto";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

app.use(cors({}));

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle a user disconnecting
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const debugMarkers: Array<string> = [
  "airshaft",
  "cargo_elevator",
  "field_depot",
  "landmark",
  "location",
  "locked_door",
  "metro_station",
  "raider_camp",
  "raider_hatch",
  "security_breach",
  "merchant",
  "npc",
  "collectible",
  "ammo_box",
  "arc_courier",
  "arc_husk",
  "arc_probe",
  "backpack",
  "baron_husk",
  "container",
  "field_crate",
  "grenade_tube",
  "item",
  "key",
  "loose_loot",
  "medical_box",
  "security_locker",
  "tactical_box",
  "toolbox",
  "weapon_crate",
  "agave",
  "apricot",
  "candleberries",
  "fruit_basket",
  "great_mullein",
  "lemons",
  "moss",
  "mushroom",
  "olives",
  "prickly_pear",
  "hidden_bunker",
  "hidden_bunker_antennae",
  "mission",
  "mission_objective",
  "arc",
  "bastion",
  "bombardier",
  "boss",
  "enemy",
  "fireball",
  "hornet",
  "leaper",
  "matriarch",
  "pop",
  "queen",
  "rocketeer",
  "sentinel",
  "shredder",
  "snitch",
  "surveyor",
  "tick",
  "turret",
  "wasp",
  "easter_egg",
  "metro_entrance",
  "miscellaneous",
  "placeholder_1",
  "placeholder_2",
  "placeholder_3",
  "placeholder_4",
  "placeholder_5",
  "placeholder_6",
  "placeholder_7",
  "placeholder_8",
  "placeholder_9",
  "player_spawn",
  "supply_call_station",
  "zipline",
  "harvester",
  "raider_cache",
  "high_loot",
  "low_loot",
  "medium_loot",
];

let positions = debugMarkers.map((marker, index) => ({
  type: marker,
  id: crypto
    .createHash("md5")
    .update(marker + index)
    .digest("hex"),
  position: {
    x: Math.random() * 2000 + 64,
    y: Math.random() * 1000 + 150,
  },
}));

setInterval(() => {
  console.log("Emitting markers event");
  io.emit("markers", positions);

  positions = positions.map((marker) => ({
    ...marker,
    position: {
      x: marker.position.x + (Math.random() - 0.5) * 50,
      y: marker.position.y + (Math.random() - 0.5) * 50,
    },
  }));
}, 75);
