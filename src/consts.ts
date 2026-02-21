export const kGamesFeatures = new Map<number, string[]>([
  // Fortnite
  [27168, ["match_info", "game_info"]],
]);

export const kGameClassIds = Array.from(kGamesFeatures.keys());

export const kWindowNames = {
  inGame: "in_game",
  desktop: "desktop",
};

export const kHotkeys = {
  toggle: "show_overlay",
};
