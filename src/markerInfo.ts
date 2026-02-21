type MarkerType =
  | "airshaft"
  | "cargo_elevator"
  | "field_depot"
  | "landmark"
  | "location"
  | "locked_door"
  | "metro_station"
  | "raider_camp"
  | "raider_hatch"
  | "security_breach"
  | "merchant"
  | "npc"
  | "collectible"
  | "ammo_box"
  | "arc_courier"
  | "arc_husk"
  | "arc_probe"
  | "backpack"
  | "baron_husk"
  | "container"
  | "field_crate"
  | "grenade_tube"
  | "item"
  | "key"
  | "loose_loot"
  | "medical_box"
  | "security_locker"
  | "tactical_box"
  | "toolbox"
  | "weapon_crate"
  | "agave"
  | "apricot"
  | "candleberries"
  | "fruit_basket"
  | "great_mullein"
  | "lemons"
  | "moss"
  | "mushroom"
  | "olives"
  | "prickly_pear"
  | "hidden_bunker"
  | "hidden_bunker_antennae"
  | "mission"
  | "mission_objective"
  | "arc"
  | "bastion"
  | "bombardier"
  | "boss"
  | "enemy"
  | "fireball"
  | "hornet"
  | "leaper"
  | "matriarch"
  | "pop"
  | "queen"
  | "rocketeer"
  | "sentinel"
  | "shredder"
  | "snitch"
  | "surveyor"
  | "tick"
  | "turret"
  | "wasp"
  | "easter_egg"
  | "metro_entrance"
  | "miscellaneous"
  | "placeholder_1"
  | "placeholder_2"
  | "placeholder_3"
  | "placeholder_4"
  | "placeholder_5"
  | "placeholder_6"
  | "placeholder_7"
  | "placeholder_8"
  | "placeholder_9"
  | "player_spawn"
  | "supply_call_station"
  | "zipline"
  | "harvester"
  | "raider_cache"
  | "high_loot"
  | "low_loot"
  | "medium_loot";

interface MarkerInfo {
  friendlyName: string;
  description: string;
}

const markerInfo: Record<MarkerType, MarkerInfo> = {
  airshaft: {
    friendlyName: "Airshaft",
    description: "Default description for Airshaft",
  },
  cargo_elevator: {
    friendlyName: "Cargo Elevator",
    description: "Default description for Cargo Elevator",
  },
  field_depot: {
    friendlyName: "Field Depot",
    description: "Default description for Field Depot",
  },
  landmark: {
    friendlyName: "Landmark",
    description: "Default description for Landmark",
  },
  location: {
    friendlyName: "Location",
    description: "Default description for Location",
  },
  locked_door: {
    friendlyName: "Locked Door",
    description: "Default description for Locked Door",
  },
  metro_station: {
    friendlyName: "Metro Station",
    description: "Default description for Metro Station",
  },
  raider_camp: {
    friendlyName: "Raider Camp",
    description: "Default description for Raider Camp",
  },
  raider_hatch: {
    friendlyName: "Raider Hatch",
    description: "Default description for Raider Hatch",
  },
  security_breach: {
    friendlyName: "Security Breach",
    description: "Default description for Security Breach",
  },
  merchant: {
    friendlyName: "Merchant",
    description: "Default description for Merchant",
  },
  npc: { friendlyName: "NPC", description: "Default description for NPC" },
  collectible: {
    friendlyName: "Collectible",
    description: "Default description for Collectible",
  },
  ammo_box: {
    friendlyName: "Ammo Box",
    description: "Default description for Ammo Box",
  },
  arc_courier: {
    friendlyName: "ARC Courier",
    description: "Default description for ARC Courier",
  },
  arc_husk: {
    friendlyName: "ARC Husk",
    description: "Default description for ARC Husk",
  },
  arc_probe: {
    friendlyName: "ARC Probe",
    description: "Default description for ARC Probe",
  },
  backpack: {
    friendlyName: "Backpack",
    description: "Default description for Backpack",
  },
  baron_husk: {
    friendlyName: "Baron Husk",
    description: "Default description for Baron Husk",
  },
  container: {
    friendlyName: "Container",
    description: "Default description for Container",
  },
  field_crate: {
    friendlyName: "Field Crate",
    description: "Default description for Field Crate",
  },
  grenade_tube: {
    friendlyName: "Grenade Tube",
    description: "Default description for Grenade Tube",
  },
  item: { friendlyName: "Item", description: "Default description for Item" },
  key: { friendlyName: "Key", description: "Default description for Key" },
  loose_loot: {
    friendlyName: "Loose Loot",
    description: "Default description for Loose Loot",
  },
  medical_box: {
    friendlyName: "Medical Box",
    description: "Default description for Medical Box",
  },
  security_locker: {
    friendlyName: "Security Locker",
    description: "Default description for Security Locker",
  },
  tactical_box: {
    friendlyName: "Tactical Box",
    description: "Default description for Tactical Box",
  },
  toolbox: {
    friendlyName: "Toolbox",
    description: "Default description for Toolbox",
  },
  weapon_crate: {
    friendlyName: "Weapon Crate",
    description: "Default description for Weapon Crate",
  },
  agave: {
    friendlyName: "Agave",
    description: "Default description for Agave",
  },
  apricot: {
    friendlyName: "Apricot",
    description: "Default description for Apricot",
  },
  candleberries: {
    friendlyName: "Candleberries",
    description: "Default description for Candleberries",
  },
  fruit_basket: {
    friendlyName: "Fruit Basket",
    description: "Default description for Fruit Basket",
  },
  great_mullein: {
    friendlyName: "Great Mullein",
    description: "Default description for Great Mullein",
  },
  lemons: {
    friendlyName: "Lemons",
    description: "Default description for Lemons",
  },
  moss: { friendlyName: "Moss", description: "Default description for Moss" },
  mushroom: {
    friendlyName: "Mushroom",
    description: "Default description for Mushroom",
  },
  olives: {
    friendlyName: "Olives",
    description: "Default description for Olives",
  },
  prickly_pear: {
    friendlyName: "Prickly Pear",
    description: "Default description for Prickly Pear",
  },
  hidden_bunker: {
    friendlyName: "Hidden Bunker",
    description: "Default description for Hidden Bunker",
  },
  hidden_bunker_antennae: {
    friendlyName: "Hidden Bunker Antennae",
    description: "Default description for Hidden Bunker Antennae",
  },
  mission: {
    friendlyName: "Mission",
    description: "Default description for Mission",
  },
  mission_objective: {
    friendlyName: "Mission Objective",
    description: "Default description for Mission Objective",
  },
  arc: { friendlyName: "ARC", description: "Default description for ARC" },
  bastion: {
    friendlyName: "Bastion",
    description: "Default description for Bastion",
  },
  bombardier: {
    friendlyName: "Bombardier",
    description: "Default description for Bombardier",
  },
  boss: { friendlyName: "Boss", description: "Default description for Boss" },
  enemy: {
    friendlyName: "Enemy",
    description: "Default description for Enemy",
  },
  fireball: {
    friendlyName: "Fireball",
    description: "Default description for Fireball",
  },
  hornet: {
    friendlyName: "Hornet",
    description: "Default description for Hornet",
  },
  leaper: {
    friendlyName: "Leaper",
    description: "Default description for Leaper",
  },
  matriarch: {
    friendlyName: "Matriarch",
    description: "Default description for Matriarch",
  },
  pop: { friendlyName: "Pop", description: "Default description for Pop" },
  queen: {
    friendlyName: "Queen",
    description: "Default description for Queen",
  },
  rocketeer: {
    friendlyName: "Rocketeer",
    description: "Default description for Rocketeer",
  },
  sentinel: {
    friendlyName: "Sentinel",
    description: "Default description for Sentinel",
  },
  shredder: {
    friendlyName: "Shredder",
    description: "Default description for Shredder",
  },
  snitch: {
    friendlyName: "Snitch",
    description: "Default description for Snitch",
  },
  surveyor: {
    friendlyName: "Surveyor",
    description: "Default description for Surveyor",
  },
  tick: { friendlyName: "Tick", description: "Default description for Tick" },
  turret: {
    friendlyName: "Turret",
    description: "Default description for Turret",
  },
  wasp: { friendlyName: "Wasp", description: "Default description for Wasp" },
  easter_egg: {
    friendlyName: "Easter Egg",
    description: "Default description for Easter Egg",
  },
  metro_entrance: {
    friendlyName: "Metro Entrance",
    description: "Default description for Metro Entrance",
  },
  miscellaneous: {
    friendlyName: "Miscellaneous",
    description: "Default description for Miscellaneous",
  },
  placeholder_1: {
    friendlyName: "Placeholder 1",
    description: "Default description for Placeholder 1",
  },
  placeholder_2: {
    friendlyName: "Placeholder 2",
    description: "Default description for Placeholder 2",
  },
  placeholder_3: {
    friendlyName: "Placeholder 3",
    description: "Default description for Placeholder 3",
  },
  placeholder_4: {
    friendlyName: "Placeholder 4",
    description: "Default description for Placeholder 4",
  },
  placeholder_5: {
    friendlyName: "Placeholder 5",
    description: "Default description for Placeholder 5",
  },
  placeholder_6: {
    friendlyName: "Placeholder 6",
    description: "Default description for Placeholder 6",
  },
  placeholder_7: {
    friendlyName: "Placeholder 7",
    description: "Default description for Placeholder 7",
  },
  placeholder_8: {
    friendlyName: "Placeholder 8",
    description: "Default description for Placeholder 8",
  },
  placeholder_9: {
    friendlyName: "Placeholder 9",
    description: "Default description for Placeholder 9",
  },
  player_spawn: {
    friendlyName: "Player Spawn",
    description: "Default description for Player Spawn",
  },
  supply_call_station: {
    friendlyName: "Supply Call Station",
    description: "Default description for Supply Call Station",
  },
  zipline: {
    friendlyName: "Zipline",
    description: "Default description for Zipline",
  },
  harvester: {
    friendlyName: "Harvester",
    description: "Default description for Harvester",
  },
  raider_cache: {
    friendlyName: "Raider Cache",
    description: "Default description for Raider Cache",
  },
  high_loot: {
    friendlyName: "High Loot",
    description: "Default description for High Loot",
  },
  low_loot: {
    friendlyName: "Low Loot",
    description: "Default description for Low Loot",
  },
  medium_loot: {
    friendlyName: "Medium Loot",
    description: "Default description for Medium Loot",
  },
};

export type { MarkerType };
export { markerInfo };
