import { HealingPotion } from "./objects/HealingPotion.js";
import { Item } from "./objects/Item.js";
import { Location } from "./objects/Location.js";
import { LootItem } from "./objects/LootItem.js";
import { Monster } from "./objects/Monster.js";
import { Quest } from "./objects/Quest.js";
import { QuestCompletionItem } from "./objects/QuestCompletionItem.js";
import { Vendor } from "./objects/Vendor.js";
import { Weapon } from "./objects/Weapon.js";
import { Scroll } from "./objects/Scroll.js";
import { Region } from "./objects/Region.js";
import { Craft } from "./objects/Craft.js";
import { Recipe } from "./objects/Recipe.js";
import { RecipeItem } from "./objects/RecipeItem.js";

export const items = [];
export const monsters = [];
export const quests = [];
export const locations = [];
export const regions = [];
export const recipes = [];

export const ITEM_IDS = {
  RUSTY_SWORD: 1,
  RAT_TAIL: 2,
  PIECE_OF_FUR: 3,
  SNAKE_FANG: 4,
  SNAKESKIN: 5,
  BATTLEWORN_HAMMER: 6,
  HEALING_POTION: 7,
  SPIDER_FANG: 8,
  SPIDER_SILK: 9,
  ADVENTURER_PASS: 10,
  TARNISHED_BASTARD_SWORD: 11,
  GREATER_HEALING_POTION: 12,
  SCROLL_FIREBALL_I: 13,
  SCROLL_RENEW_I: 14,
  BRIGHT_DUST: 15,
  BONE: 16,
  ROLL_OF_PAPYRUS: 17,
  SCORPION_TAIL: 18,
  MYSTERY_MEAT: 19,
  MYSTERY_STEW: 20,
  GELATINOUS_GOO: 21,
  SILVER_SPADE: 22,
  BLUE_CRYSTAL: 23,
  CANDLE: 24,
  ESSENCE_OF_UNDEATH: 25,
  YETI_FUR: 26,
  ELEMENTAL_WATER: 27,
  SACRED_RUNE: 28,
  HEART_OF_THE_MOUNTAIN: 29,
  RUNE_SWORD: 30,
};

const UNSELLABLE_ITEM_PRICE = -1;

export const MONSTER_IDS = {
  RAT: 1,
  SNAKE: 2,
  GIANT_SPIDER: 3,
  DUST_DEVIL: 4,
  SKELETON: 5,
  FIRE_SCORPION: 6,
  OOZE: 7,
  GOBLIN: 8,
  ICE_SPIRIT: 9,
  YETI: 10,
  ICE_ELEMENTAL: 11,
  RISEN_GUARDIAN: 12,
};

export const QUEST_IDS = {
  CLEAR_ALCHEMIST_GARDEN: 1,
  CLEAR_FARMERS_FIELD: 2,
  THE_HUNGRY_MAGE: 3,
  HONEST_WORK: 4,
};

export const LOCATION_IDS = {
  HOME: 1,
  AVORIAS_MARKET: 2,
  GUARD_POST: 3,
  ALCHEMIST_HUT: 4,
  ALCHEMISTS_GARDEN: 5,
  FARMHOUSE: 6,
  FARM_FIELD: 7,
  AVORIAS_BRIDGE: 8,
  SPIDER_FIELD: 9,
  SAND_DUNES: 10,
  SUNSET_OASIS: 11,
  SEA_OF_BONES: 12,
  BURNING_WASTES: 13,
  THE_ACID_PITS: 14,
  THE_CRATER: 15,
  THE_CRUMBLING_CLIFFS: 16,
  ABANDONED_MINE: 17,
  MOUNTAIN_PASS: 18,
  FROZEN_FOREST: 19,
  FROZEN_LAKE: 20,
  YETIS_DEN: 21,
  ICE_CAVERN: 22,
  ICE_TEMPLE: 23,
  ABANDONED_TOWER: 24,
  DWARF_MINE_ENTRANCE: 25,
  DWARF_MINE: 26,
};

export const REGION_IDS = {
  ANNORA_VALLEY: 1,
  THE_BLASTED_WASTELAND: 2,
  ELSOS: 3,
};

export const SPELL_TYPES = {
  DAMAGE: 1,
  HEALING: 2,
};

export const RECIPE_IDS = {
  CRAFT_SCROLL_FIREBALL_I: 1,
  CRAFT_SCROLL_RENEW_I: 2,
  CRAFT_RUNE_SWORD: 3,
};

function populateWorld() {
  populateItems();
  populateRecipes();
  populateMonsters();
  populateQuests();
  populateLocations();
}

function populateItems() {
  items.push(
    new Weapon(
      ITEM_IDS.RUSTY_SWORD,
      "Rusty Sword",
      "Rusty Swords",
      UNSELLABLE_ITEM_PRICE,
      5,
      10
    )
  );
  items.push(new Item(ITEM_IDS.RAT_TAIL, "Rat Tail", "Rat Tails", 1));
  items.push(
    new Item(ITEM_IDS.PIECE_OF_FUR, "Piece of Fur", "Pieces of Fur", 1)
  );
  items.push(new Item(ITEM_IDS.SNAKE_FANG, "Snake Fang", "Snake Fangs", 1));
  items.push(new Item(ITEM_IDS.SNAKESKIN, "Snakeskin", "Snakeskins", 1));
  items.push(
    new Weapon(
      ITEM_IDS.BATTLEWORN_HAMMER,
      "Battleworn Hammer",
      "Battleworn Hammer",
      20,
      7,
      11
    )
  );
  items.push(
    new HealingPotion(
      ITEM_IDS.HEALING_POTION,
      "Healing Potion",
      "Healing Potions",
      10,
      40
    )
  );
  items.push(new Item(ITEM_IDS.SPIDER_FANG, "Spider Fang", "Spider Fangs", 1));
  items.push(new Item(ITEM_IDS.SPIDER_SILK, "Spider Silk", "Spider Silks", 2));
  items.push(
    new Item(
      ITEM_IDS.ADVENTURER_PASS,
      "Adventurer Pass",
      "Adventurer Passes",
      UNSELLABLE_ITEM_PRICE
    )
  );
  items.push(
    new Weapon(
      ITEM_IDS.TARNISHED_BASTARD_SWORD,
      "Tarnished Bastard Sword",
      "Tarnished Bastard Swords",
      35,
      8,
      12
    )
  );
  items.push(
    new HealingPotion(
      ITEM_IDS.GREATER_HEALING_POTION,
      "Greater Healing Potion",
      "Greater Healing Potions",
      25,
      100
    )
  );
  items.push(
    new Scroll(
      ITEM_IDS.SCROLL_FIREBALL_I,
      "Scroll: Fireball I",
      "Scrolls: Fireball I",
      25,
      30,
      40,
      SPELL_TYPES.DAMAGE,
      "Fireball I"
    )
  );
  items.push(
    new Scroll(
      ITEM_IDS.SCROLL_RENEW_I,
      "Scroll: Renew I",
      "Scrolls: Renew I",
      25,
      25,
      50,
      SPELL_TYPES.HEALING,
      "Renew I"
    )
  );
  items.push(new Item(ITEM_IDS.BRIGHT_DUST, "Bright Dust", "Bright Dusts", 3));
  items.push(new Item(ITEM_IDS.BONE, "Bone", "Bones", 2));
  items.push(
    new Item(ITEM_IDS.ROLL_OF_PAPYRUS, "Roll of Papyrus", "Rolls of Papyrus", 3)
  );
  items.push(
    new Item(ITEM_IDS.SCORPION_TAIL, "Scorpion Tail", "Scorpion Tails", 1)
  );
  items.push(
    new Item(ITEM_IDS.MYSTERY_MEAT, "Mystery Meat", "Mystery Meats", 2)
  );
  items.push(
    new HealingPotion(
      ITEM_IDS.MYSTERY_STEW,
      "Mystery Stew",
      "Mystery Stews",
      15,
      100
    )
  );
  items.push(
    new Item(ITEM_IDS.GELATINOUS_GOO, "Gelatinous Goo", "Gelatinous Goos", 1)
  );
  items.push(
    new Weapon(
      ITEM_IDS.SILVER_SPADE,
      "Silver Spade",
      "Silver Spades",
      30,
      7,
      11
    )
  );
  items.push(
    new Item(ITEM_IDS.BLUE_CRYSTAL, "Blue Crystal", "Blue Crystals", 3)
  );
  items.push(new Item(ITEM_IDS.CANDLE, "Candle", "Candles", 1));
  items.push(
    new Item(
      ITEM_IDS.ESSENCE_OF_UNDEATH,
      "Essence of Undeath",
      "Essences of Undeath",
      2
    )
  );
  items.push(new Item(ITEM_IDS.YETI_FUR, "Yeti Fur", "Yeti Furs", 2));
  items.push(
    new Item(ITEM_IDS.ELEMENTAL_WATER, "Elemental Water", "Elemental Waters", 3)
  );
  items.push(new Item(ITEM_IDS.SACRED_RUNE, "Sacred Rune", "Sacred Runes", 3));
  items.push(
    new Item(
      ITEM_IDS.HEART_OF_THE_MOUNTAIN,
      "Heart of the Mountain",
      "Hearts of the Mountain",
      UNSELLABLE_ITEM_PRICE
    )
  );
  items.push(
    new Weapon(ITEM_IDS.RUNE_SWORD, "Rune Sword", "Rune Swords", 40, 10, 12)
  );
}

function populateRecipes() {
  const fireballIRecipeComponent = new RecipeItem(
    itemByID(ITEM_IDS.ROLL_OF_PAPYRUS),
    3
  );

  const fireballIRecipeResult = new RecipeItem(
    itemByID(ITEM_IDS.SCROLL_FIREBALL_I),
    1
  );

  const fireballIRecipe = new Recipe(
    RECIPE_IDS.CRAFT_SCROLL_FIREBALL_I,
    "Craft Scroll: Fireball I",
    fireballIRecipeComponent,
    fireballIRecipeResult
  );

  recipes.push(fireballIRecipe);

  const runeSwordRecipeComponent = new RecipeItem(
    itemByID(ITEM_IDS.SACRED_RUNE),
    5
  );

  const runeSwordRecipeResult = new RecipeItem(
    itemByID(ITEM_IDS.RUNE_SWORD),
    1
  );

  const runeSwordRecipe = new Recipe(
    RECIPE_IDS.CRAFT_RUNE_SWORD,
    "Craft Weapon: Rune Sword",
    runeSwordRecipeComponent,
    runeSwordRecipeResult
  );

  recipes.push(runeSwordRecipe);
}

function populateMonsters() {
  const rat = new Monster(MONSTER_IDS.RAT, "Rat", 4, 8, 0, 30, 30, 3, false);
  rat.LootTable.push(new LootItem(itemByID(ITEM_IDS.RAT_TAIL), 75, false));
  rat.LootTable.push(new LootItem(itemByID(ITEM_IDS.PIECE_OF_FUR), 65, true));

  const snake = new Monster(
    MONSTER_IDS.SNAKE,
    "Snake",
    6,
    8,
    0,
    45,
    45,
    4,
    true
  );
  snake.LootTable.push(new LootItem(itemByID(ITEM_IDS.SNAKE_FANG), 75, false));
  snake.LootTable.push(new LootItem(itemByID(ITEM_IDS.SNAKESKIN), 65, true));

  const giantSpider = new Monster(
    MONSTER_IDS.GIANT_SPIDER,
    "Giant spider",
    7,
    10,
    0,
    100,
    100,
    7,
    true
  );
  giantSpider.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.SPIDER_FANG), 75, true)
  );
  giantSpider.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.SPIDER_SILK), 25, false)
  );

  const dustDevil = new Monster(
    MONSTER_IDS.DUST_DEVIL,
    "Dust Devil",
    10,
    12,
    0,
    90,
    90,
    8,
    false
  );

  dustDevil.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.BRIGHT_DUST), 100, true)
  );

  const skeleton = new Monster(
    MONSTER_IDS.SKELETON,
    "Skeleton",
    13,
    16,
    0,
    120,
    120,
    9,
    false
  );

  skeleton.LootTable.push(new LootItem(itemByID(ITEM_IDS.BONE), 75, true));
  skeleton.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.ROLL_OF_PAPYRUS), 20, false)
  );
  skeleton.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.BATTLEWORN_HAMMER), 5, false)
  );

  const fireScorpion = new Monster(
    MONSTER_IDS.FIRE_SCORPION,
    "Fire Scorpion",
    15,
    17,
    0,
    145,
    145,
    12,
    false
  );

  fireScorpion.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.SCORPION_TAIL), 75, true)
  );
  fireScorpion.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.MYSTERY_MEAT), 25, false)
  );

  const ooze = new Monster(
    MONSTER_IDS.OOZE,
    "Ooze",
    15,
    18,
    0,
    160,
    160,
    14,
    true
  );

  ooze.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.GELATINOUS_GOO), 70, true)
  );

  const goblin = new Monster(
    MONSTER_IDS.GOBLIN,
    "Goblin",
    13,
    20,
    3,
    200,
    200,
    15,
    false
  );

  goblin.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.BLUE_CRYSTAL), 75, true)
  );
  goblin.LootTable.push(new LootItem(itemByID(ITEM_IDS.CANDLE), 25, false));

  const yeti = new Monster(
    MONSTER_IDS.YETI,
    "Yeti",
    15,
    22,
    0,
    205,
    205,
    16,
    false
  );

  yeti.LootTable.push(new LootItem(itemByID(ITEM_IDS.YETI_FUR), 80, true));

  const iceSpirit = new Monster(
    MONSTER_IDS.ICE_SPIRIT,
    "Ice Spirit",
    15,
    23,
    0,
    215,
    215,
    17,
    false
  );

  iceSpirit.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.ESSENCE_OF_UNDEATH), 85, true)
  );

  iceSpirit.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.SACRED_RUNE), 15, false)
  );

  const iceElemental = new Monster(
    MONSTER_IDS.ICE_ELEMENTAL,
    "Ice Elemental",
    14,
    21,
    0,
    215,
    215,
    17,
    false
  );

  iceElemental.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.ELEMENTAL_WATER), 70, true)
  );

  iceElemental.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.SACRED_RUNE), 70, false)
  );

  const risenGuardian = new Monster(
    MONSTER_IDS.RISEN_GUARDIAN,
    "Risen Guardian",
    15,
    25,
    5,
    230,
    230,
    18,
    false
  );

  risenGuardian.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.ESSENCE_OF_UNDEATH), 55, true)
  );
  risenGuardian.LootTable.push(
    new LootItem(itemByID(ITEM_IDS.ROLL_OF_PAPYRUS), 45, false)
  );

  monsters.push(rat);
  monsters.push(snake);
  monsters.push(giantSpider);
  monsters.push(dustDevil);
  monsters.push(skeleton);
  monsters.push(fireScorpion);
  monsters.push(ooze);
  monsters.push(goblin);
  monsters.push(iceSpirit);
  monsters.push(yeti);
  monsters.push(iceElemental);
  monsters.push(risenGuardian);
}

function populateQuests() {
  const clearAlchemistGarden = new Quest(
    QUEST_IDS.CLEAR_ALCHEMIST_GARDEN,
    "The Alchemist's Infestation",
    "The alchemist, Master Agrippa, is in desperate need of your help! His prized garden, where he grows rare and exotic plants for his experiments, has been overrun by hordes of rats.",
    6
  );

  clearAlchemistGarden.QuestCompletionItems.push(
    new QuestCompletionItem(itemByID(ITEM_IDS.RAT_TAIL), 5)
  );

  clearAlchemistGarden.addRewardItems(itemByID(ITEM_IDS.HEALING_POTION));

  const clearFarmersField = new Quest(
    QUEST_IDS.CLEAR_FARMERS_FIELD,
    "The Farmer's Plight",
    "A farmer by the name of Arlic has reported a severe infestation of venomous snakes in his fields, and he fears for the safety of his family and his livestock. You have to venture into Arlic's fields and eliminate the snake population.",
    5
  );

  clearFarmersField.QuestCompletionItems.push(
    new QuestCompletionItem(itemByID(ITEM_IDS.SNAKE_FANG), 3)
  );

  clearFarmersField.addRewardItems(itemByID(ITEM_IDS.ADVENTURER_PASS));

  const theHungryMage = new Quest(
    QUEST_IDS.THE_HUNGRY_MAGE,
    "The Hungry Mage",
    "Sabana the mage hasn't eaten in days. To prepare her famous Mystery Stew she will need meat from the scorpions that live to the west. Hurry!",
    6
  );

  theHungryMage.QuestCompletionItems.push(
    new QuestCompletionItem(itemByID(ITEM_IDS.MYSTERY_MEAT), 3)
  );

  theHungryMage.addRewardItems(itemByID(ITEM_IDS.MYSTERY_STEW));

  const honestWork = new Quest(
    QUEST_IDS.HONEST_WORK,
    "Honest Work",
    "The Company is mining near the Abandoned Mine to the west. They can't get into the mine because of all the goblins. Take their crystals from them, and show them they don't have the run of the mine.",
    25
  );

  honestWork.QuestCompletionItems.push(
    new QuestCompletionItem(itemByID(ITEM_IDS.BLUE_CRYSTAL), 3)
  );

  honestWork.addRewardItems(itemByID(ITEM_IDS.SILVER_SPADE));

  const elsasCloack = new Quest(
    QUEST_IDS.ELSAS_CLOACK,
    "Elsa's Cloak",
    "A skilled tailor named Elsa, needs your help in obtaining three yeti pelts to create a warm and durable cloak for a wealthy client. She tells you that the only place to find yetis is in a nearby cave.",
    20
  );

  elsasCloack.QuestCompletionItems.push(
    new QuestCompletionItem(itemByID(ITEM_IDS.YETI_FUR), 4)
  );

  const theHeartOfTheMountain = new Quest(
    QUEST_IDS.THE_HEART_OF_THE_MOUNTAIN,
    "The Heart of the Mountain",
    "Zephyr needs your help obtaining elemental waters. He tells you that the waters are necessary to craft the Heart of the Mountain, an artifact that will allow you to access the Dwarf Mines.",
    0
  );

  theHeartOfTheMountain.QuestCompletionItems.push(
    new QuestCompletionItem(itemByID(ITEM_IDS.ELEMENTAL_WATER), 3)
  );

  quests.push(clearAlchemistGarden);
  quests.push(clearFarmersField);
  quests.push(theHungryMage);
  quests.push(elsasCloack);
  quests.push(theHeartOfTheMountain);
}

function populateLocations() {
  // ANNORA
  const annoraValley = new Region(
    REGION_IDS.ANNORA_VALLEY,
    "Annora Valley",
    "Annora, a serene farmer's valley, with quaint thatched-roof cottages, fertile fields, grazing livestock, and a gentle flowing river."
  );

  regions.push(annoraValley);

  const home = new Location(
    LOCATION_IDS.HOME,
    "Home",
    "Few basic furnishings with a not so comfy sleeping mat. Life here is simple but often hard."
  );

  const avoriasMarket = new Location(
    LOCATION_IDS.AVORIAS_MARKET,
    "Avoria's Market",
    "Bustling hub of commerce and trade, where merchants and traders from all Annora converge to sell their wares. You hear a cacophony of sounds, from the clattering of horses and wagons to the chatter of vendors."
  );

  const bobTheRatCatcher = new Vendor("Bob the Rat-Catcher");
  bobTheRatCatcher.addItemToInventory(itemByID(ITEM_IDS.PIECE_OF_FUR), 5);
  bobTheRatCatcher.addItemToInventory(itemByID(ITEM_IDS.RAT_TAIL), 3);
  avoriasMarket.VendorWorkingHere = bobTheRatCatcher;

  const alchemistHut = new Location(
    LOCATION_IDS.ALCHEMIST_HUT,
    "Alchemist's hut",
    "Small, rustic structure hidden from view, obscured by thick vines, overgrown shrubs, and ancient trees. Inside, the hut is a cluttered and chaotic space, with shelves lining the walls, stacked high with jars of herbs, crystals, powders, and other arcane ingredients."
  );
  alchemistHut.QuestAvailableHere = questByID(QUEST_IDS.CLEAR_ALCHEMIST_GARDEN);

  const alchemistsGarden = new Location(
    LOCATION_IDS.ALCHEMISTS_GARDEN,
    "Alchemist's garden",
    "Plants grown here are used in the creation of potions, tinctures, and other alchemical concoctions. You are greeted by a riot of color and scent, with plants of every shape and size vying for your attention."
  );
  alchemistsGarden.MonsterLivingHere = monsterByID(MONSTER_IDS.RAT);

  const farmhouse = new Location(
    LOCATION_IDS.FARMHOUSE,
    "Farmhouse",
    "Humble dwelling made of wood and stone, located on the outskirts of the village. It's surrounded by a small patch of land, where the farmer grows crops and raise livestock."
  );
  farmhouse.QuestAvailableHere = questByID(QUEST_IDS.CLEAR_FARMERS_FIELD);

  const farmersField = new Location(
    LOCATION_IDS.FARM_FIELD,
    "Farmer's field",
    "The crops in the field are a sight to behold. They come in a myriad of colors and shapes, ranging from towering stalks of corn to glowing orbs of enchanted fruit."
  );
  farmersField.MonsterLivingHere = monsterByID(MONSTER_IDS.SNAKE);

  const guardPost = new Location(
    LOCATION_IDS.GUARD_POST,
    "Guard post",
    "As you approach the guard post, you can see the imposing stone walls rising up in front of you, punctuated by the wooden lookout towers on each corner. One of the guards steps forward, his hand on the hilt of his sword."
  );

  const bridge = new Location(
    LOCATION_IDS.BRIDGE,
    "Stone Bridge",
    "The bridge is old and weathered, with small cracks and uneven surfaces that have been worn down by centuries of use. You can see the water rushing below you, a crystal-clear stream that sparkles in the sunlight.",
    itemByID(ITEM_IDS.ADVENTURER_PASS)
  );

  const spiderField = new Location(
    LOCATION_IDS.SPIDER_FIELD,
    "Dark Forest",
    "As you move deeper into the field, you can see that the ground is covered with a thick layer of spider webs, criss-crossing and overlapping in intricate patterns. "
  );
  spiderField.MonsterLivingHere = monsterByID(MONSTER_IDS.GIANT_SPIDER);

  home.LocationToNorth = avoriasMarket;

  avoriasMarket.LocationToNorth = alchemistHut;
  avoriasMarket.LocationToSouth = home;
  avoriasMarket.LocationToEast = guardPost;
  avoriasMarket.LocationToWest = farmhouse;

  farmhouse.LocationToEast = avoriasMarket;
  farmhouse.LocationToWest = farmersField;

  farmersField.LocationToEast = farmhouse;

  alchemistHut.LocationToSouth = avoriasMarket;
  alchemistHut.LocationToNorth = alchemistsGarden;

  alchemistsGarden.LocationToSouth = alchemistHut;

  guardPost.LocationToEast = bridge;
  guardPost.LocationToWest = avoriasMarket;

  bridge.LocationToWest = guardPost;
  bridge.LocationToEast = spiderField;

  spiderField.LocationToWest = bridge;

  locations.push(home);
  locations.push(avoriasMarket);
  locations.push(guardPost);
  locations.push(alchemistHut);
  locations.push(alchemistsGarden);
  locations.push(farmhouse);
  locations.push(farmersField);
  locations.push(bridge);
  locations.push(spiderField);

  home.Region = annoraValley;
  avoriasMarket.Region = annoraValley;
  guardPost.Region = annoraValley;
  alchemistHut.Region = annoraValley;
  alchemistsGarden.Region = annoraValley;
  farmhouse.Region = annoraValley;
  farmersField.Region = annoraValley;
  bridge.Region = annoraValley;
  spiderField.Region = annoraValley;

  // ALACIA
  const theBlastedWasteland = new Region(
    REGION_IDS.THE_BLASTED_WASTELAND,
    "Alacia, the Blasted Wasteland",
    "Harsh desert wasteland that was ravaged by a magical apocalypse, now home to mutants and other dangerous creatures."
  );

  regions.push(theBlastedWasteland);

  const sandDunes = new Location(
    LOCATION_IDS.SAND_DUNES,
    "Sand Dunes",
    "Vast expanse of shifting sand dunes that stretch on for miles. The wind is fierce and unrelenting, and travelers can easily become lost in the endless sea of sand."
  );
  sandDunes.MonsterLivingHere = monsterByID(MONSTER_IDS.DUST_DEVIL);

  const sunsetOasis = new Location(
    LOCATION_IDS.SUNSET_OASIS,
    "Sunset Oasis",
    "The oasis is a patch of lush greenery that sits amidst the endless sea of sand, surrounded by palm trees and sparkling pools of water. The sight of it is a welcome relief to travelers who have been wandering through the desert for days, struggling to survive in the blistering heat and relentless sandstorms."
  );
  sunsetOasis.QuestAvailableHere = questByID(QUEST_IDS.THE_HUNGRY_MAGE);

  const sabanaTheMage = new Craft(
    "Sabana the Mage",
    recipeByID(RECIPE_IDS.CRAFT_SCROLL_FIREBALL_I)
  );
  sunsetOasis.CraftHere = sabanaTheMage;

  const seaOfBones = new Location(
    LOCATION_IDS.SEA_OF_BONES,
    "Sea of Bones",
    "Bleak and barren landscape where the ground is littered with the bones of long-dead creatures. Seems haunted by restless spirits and dark magic."
  );
  seaOfBones.MonsterLivingHere = monsterByID(MONSTER_IDS.SKELETON);

  const burningWastes = new Location(
    LOCATION_IDS.BURNING_WASTES,
    "Burning Wastes",
    "Place of searing heat, where the sun beats down relentlessly on the parched earth, and where the sand burns like fire beneath your feet."
  );
  burningWastes.MonsterLivingHere = monsterByID(MONSTER_IDS.FIRE_SCORPION);

  const theAcidPits = new Location(
    LOCATION_IDS.THE_ACID_PITS,
    "The Acid Pits",
    "A series of deep pits filled with acidic sludge. The fumes from the pits are toxic and can cause severe burns and respiratory problems."
  );
  theAcidPits.MonsterLivingHere = monsterByID(MONSTER_IDS.OOZE);

  const theCrater = new Location(
    LOCATION_IDS.THE_CRATER,
    "The Crater",
    "Crater caused by a meteor strike. The area is scorched and blasted, with twisted metal and debris scattered throughout."
  );
  theCrater.QuestAvailableHere = questByID(QUEST_IDS.HONEST_WORK);

  const theCrumblingCliffs = new Location(
    LOCATION_IDS.THE_CRUMBLING_CLIFFS,
    "The Crumbling Cliffs",
    "Steep cliffs that rise high above the wasteland. The edges are treacherous and unstable, and rockslides are common."
  );

  const ostaTheErmit = new Vendor("Osta the Ermit");
  ostaTheErmit.addItemToInventory(itemByID(ITEM_IDS.PIECE_OF_FUR), 5);
  ostaTheErmit.addItemToInventory(itemByID(ITEM_IDS.RAT_TAIL), 3);
  theCrumblingCliffs.VendorWorkingHere = ostaTheErmit;

  const abandonedMine = new Location(
    LOCATION_IDS.ABANDONED_MINE,
    "Abandoned Mine",
    "A long-abandoned mine filled with dark and twisting tunnels. The air is thick with dust and the smell of sulfur, and the area is infested with dangerous creatures."
  );
  abandonedMine.MonsterLivingHere = monsterByID(MONSTER_IDS.GOBLIN);

  spiderField._LocationToEast = burningWastes;

  sandDunes.LocationToWest = spiderField;

  sunsetOasis.LocationToNorth = theAcidPits;
  sunsetOasis.LocationToEast = sandDunes;
  sunsetOasis.LocationToWest = seaOfBones;

  seaOfBones.LocationToEast = sunsetOasis;
  seaOfBones.LocationToWest = burningWastes;

  burningWastes.LocationToEast = seaOfBones;
  // burningWastes.LocationToWest = burningWastes;

  theAcidPits.LocationToSouth = sunsetOasis;
  theAcidPits.LocationToNorth = theCrater;

  theCrater.LocationToNorth = theCrumblingCliffs;
  theCrater.LocationToSouth = theAcidPits;
  theCrater.LocationToWest = abandonedMine;

  theCrumblingCliffs.LocationToSouth = theCrater;

  locations.push(sandDunes);
  locations.push(sunsetOasis);
  locations.push(seaOfBones);
  locations.push(burningWastes);
  locations.push(theAcidPits);
  locations.push(theCrater);
  locations.push(theCrumblingCliffs);
  locations.push(abandonedMine);

  sandDunes.Region = theBlastedWasteland;
  sunsetOasis.Region = theBlastedWasteland;
  seaOfBones.Region = theBlastedWasteland;
  burningWastes.Region = theBlastedWasteland;
  theAcidPits.Region = theBlastedWasteland;
  theCrater.Region = theBlastedWasteland;
  theCrumblingCliffs.Region = theBlastedWasteland;
  abandonedMine.Region = theBlastedWasteland;

  // ELSOS
  const elsos = new Region(
    REGION_IDS.ELSOS,
    "Elsos Peaks",
    "Towering peaks covered in sparkling white snow dominate the landscape. The quiet stillness of the mountains is only interrupted by the occasional sound of an avalanche, sending a cascade of snow and ice crashing down the slopes."
  );

  regions.push(elsos);

  const mountainPass = new Location(
    LOCATION_IDS.MOUNTAIN_PASS,
    "Mountain Pass",
    "Treacherous path through the mountains that is often blocked by snowdrifts and avalanches."
  );
  mountainPass.LevelRequired = 15;

  const frozenForest = new Location(
    LOCATION_IDS.FROZEN_FOREST,
    "Frozen Forest",
    "Overall, the Frozen Forest is a stunning yet perilous location, where the beauty of nature is both captivating and deadly. The trees, once lush and green, are now encased in a thick layer of frost and ice, giving them an otherworldly appearance."
  );
  frozenForest.QuestAvailableHere = questByID(QUEST_IDS.ELSAS_CLOACK);

  const frozenLake = new Location(
    LOCATION_IDS.FROZEN_LAKE,
    "Frozen Lake",
    "The lake is vast, with a surface that stretches out in every direction, covered in a layer of pristine snow that twinkles like diamonds in the bright sunlight."
  );
  frozenLake.MonsterLivingHere = monsterByID(MONSTER_IDS.ICE_SPIRIT);

  const yetisDen = new Location(
    LOCATION_IDS.YETIS_DEN,
    "Yeti's Den",
    "The walls are lined with massive paw prints, and the air is thick with the musky scent of the beasts. The tunnels twist and turn in a labyrinthine pattern, making it easy to get lost in the darkness."
  );
  yetisDen.MonsterLivingHere = monsterByID(MONSTER_IDS.YETI);

  const iceCavern = new Location(
    LOCATION_IDS.ICE_CAVERN,
    "Ice Cavern",
    "As you enter the ice cavern, you are met with a dazzling sight. The walls and ceiling are made entirely of ice, and they glimmer and sparkle in the dim light, casting an ethereal glow over everything in the chamber."
  );
  iceCavern.QuestAvailableHere = questByID(QUEST_IDS.THE_HEART_OF_THE_MOUNTAIN);

  const iceTemple = new Location(
    LOCATION_IDS.ICE_TEMPLE,
    "Winter's Temple",
    "As you step inside, you are immediately struck by the sheer size and grandeur of the temple. The interior is carved entirely out of ice, with massive columns that stretch up to the ceiling, towering over you like giants."
  );
  iceTemple.MonsterLivingHere = monsterByID(MONSTER_IDS.ICE_ELEMENTAL);

  const abandonedTower = new Location(
    LOCATION_IDS.ABANDONED_TOWER,
    "Abandoned Tower",
    "The abandoned tower looms over the surrounding landscape, a towering structure that seems to defy both time and nature. From a distance, it looks like a dark, ominous spike piercing the sky."
  );
  abandonedTower.MonsterLivingHere = monsterByID(MONSTER_IDS.RISEN_GUARDIAN);

  const dwarfMineEntrance = new Location(
    LOCATION_IDS.DWARF_MINE_ENTRANCE,
    "Dwarf Mine Entrance",
    "The dwarf mine is a sprawling underground labyrinth. As you enter the mine, you are greeted by the sound of pickaxes striking stone, and the soft glow of lanterns and torches that line the walls."
  );

  const dwarfMine = new Location(
    LOCATION_IDS.DWARF_MINE,
    "Dwarf Mine",
    "The dwarves who work the mine are tough and resilient, and they welcome those who come to trade or do business, as long as they respect the rules and customs of the underground world.",
    itemByID(ITEM_IDS.HEART_OF_THE_MOUNTAIN)
  );

  const jonaTheSmith = new Craft(
    "Jona the Smith",
    recipeByID(RECIPE_IDS.CRAFT_RUNE_SWORD)
  );
  dwarfMine.CraftHere = jonaTheSmith;

  theCrumblingCliffs.LocationToNorth = mountainPass;

  mountainPass.LocationToNorth = frozenForest;
  mountainPass.LocationToSouth = theCrumblingCliffs;

  frozenForest.LocationToSouth = mountainPass;
  frozenForest.LocationToEast = iceCavern;
  frozenForest.LocationToWest = frozenLake;

  frozenLake.LocationToEast = frozenForest;
  frozenLake.LocationToNorth = yetisDen;

  yetisDen.LocationToSouth = frozenLake;

  iceCavern.LocationToNorth = iceTemple;
  iceCavern.LocationToEast = abandonedTower;
  iceCavern.LocationToWest = frozenForest;

  iceTemple.LocationToSouth = iceCavern;

  abandonedTower.LocationToSouth = dwarfMineEntrance;
  abandonedTower.LocationToWest = iceCavern;

  dwarfMineEntrance.LocationToNorth = abandonedTower;
  dwarfMineEntrance.LocationToEast = dwarfMine;

  dwarfMineEntrance.LocationToWest = dwarfMineEntrance;

  locations.push(mountainPass);
  locations.push(frozenForest);
  locations.push(frozenLake);
  locations.push(yetisDen);
  locations.push(iceCavern);
  locations.push(iceTemple);
  locations.push(abandonedTower);
  locations.push(dwarfMineEntrance);
  locations.push(dwarfMine);

  mountainPass.Region = elsos;
  frozenForest.Region = elsos;
  frozenLake.Region = elsos;
  yetisDen.Region = elsos;
  iceCavern.Region = elsos;
  iceTemple.Region = elsos;
  abandonedTower.Region = elsos;
  dwarfMineEntrance.Region = elsos;
  dwarfMine.Region = elsos;

  // ELSOS
  const elsos = new Region(
    REGION_IDS.ELSOS,
    "Elsos Peaks",
    "Towering peaks covered in sparkling white snow dominate the landscape. The quiet stillness of the mountains is only interrupted by the occasional sound of an avalanche, sending a cascade of snow and ice crashing down the slopes."
  );

  regions.push(elsos);

  const mountainPass = new Location(
    LOCATION_IDS.MOUNTAIN_PASS,
    "Mountain Pass",
    "Treacherous path through the mountains that is often blocked by snowdrifts and avalanches."
  );
  mountainPass.LevelRequired = 15;

  const frozenForest = new Location(
    LOCATION_IDS.FROZEN_FOREST,
    "Frozen Forest",
    "Overall, the Frozen Forest is a stunning yet perilous location, where the beauty of nature is both captivating and deadly. The trees, once lush and green, are now encased in a thick layer of frost and ice, giving them an otherworldly appearance."
  );
  frozenForest.QuestAvailableHere = questByID(QUEST_IDS.ELSAS_CLOACK);

  const frozenLake = new Location(
    LOCATION_IDS.FROZEN_LAKE,
    "Frozen Lake",
    "The lake is vast, with a surface that stretches out in every direction, covered in a layer of pristine snow that twinkles like diamonds in the bright sunlight."
  );
  frozenLake.MonsterLivingHere = monsterByID(MONSTER_IDS.ICE_SPIRIT);

  const yetisDen = new Location(
    LOCATION_IDS.YETIS_DEN,
    "Yeti's Den",
    "The walls are lined with massive paw prints, and the air is thick with the musky scent of the beasts. The tunnels twist and turn in a labyrinthine pattern, making it easy to get lost in the darkness."
  );
  yetisDen.MonsterLivingHere = monsterByID(MONSTER_IDS.YETI);

  const iceCavern = new Location(
    LOCATION_IDS.ICE_CAVERN,
    "Ice Cavern",
    "As you enter the ice cavern, you are met with a dazzling sight. The walls and ceiling are made entirely of ice, and they glimmer and sparkle in the dim light, casting an ethereal glow over everything in the chamber."
  );
  iceCavern.QuestAvailableHere = questByID(QUEST_IDS.THE_HEART_OF_THE_MOUNTAIN);

  const iceTemple = new Location(
    LOCATION_IDS.ICE_TEMPLE,
    "Winter's Temple",
    "As you step inside, you are immediately struck by the sheer size and grandeur of the temple. The interior is carved entirely out of ice, with massive columns that stretch up to the ceiling, towering over you like giants."
  );
  iceTemple.MonsterLivingHere = monsterByID(MONSTER_IDS.ICE_ELEMENTAL);

  const abandonedTower = new Location(
    LOCATION_IDS.ABANDONED_TOWER,
    "Abandoned Tower",
    "The abandoned tower looms over the surrounding landscape, a towering structure that seems to defy both time and nature. From a distance, it looks like a dark, ominous spike piercing the sky."
  );
  abandonedTower.MonsterLivingHere = monsterByID(MONSTER_IDS.RISEN_GUARDIAN);

  const dwarfMineEntrance = new Location(
    LOCATION_IDS.DWARF_MINE_ENTRANCE,
    "Dwarf Mine Entrance",
    "The dwarf mine is a sprawling underground labyrinth. As you enter the mine, you are greeted by the sound of pickaxes striking stone, and the soft glow of lanterns and torches that line the walls."
  );

  const dwarfMine = new Location(
    LOCATION_IDS.DWARF_MINE,
    "Dwarf Mine",
    "The dwarves who work the mine are tough and resilient, and they welcome those who come to trade or do business, as long as they respect the rules and customs of the underground world.",
    itemByID(ITEM_IDS.HEART_OF_THE_MOUNTAIN)
  );

  const jonaTheSmith = new Craft(
    "Jona the Smith",
    recipeByID(RECIPE_IDS.CRAFT_RUNE_SWORD)
  );
  dwarfMine.CraftHere = jonaTheSmith;

  theCrumblingCliffs.LocationToNorth = mountainPass;

  mountainPass.LocationToNorth = frozenForest;
  mountainPass.LocationToSouth = theCrumblingCliffs;

  frozenForest.LocationToSouth = mountainPass;
  frozenForest.LocationToEast = iceCavern;
  frozenForest.LocationToWest = frozenLake;

  frozenLake.LocationToEast = frozenForest;
  frozenLake.LocationToNorth = yetisDen;

  yetisDen.LocationToSouth = frozenLake;

  iceCavern.LocationToNorth = iceTemple;
  iceCavern.LocationToEast = abandonedTower;
  iceCavern.LocationToWest = frozenForest;

  iceTemple.LocationToSouth = iceCavern;

  abandonedTower.LocationToSouth = dwarfMineEntrance;
  abandonedTower.LocationToWest = iceCavern;

  dwarfMineEntrance.LocationToNorth = abandonedTower;
  dwarfMineEntrance.LocationToEast = dwarfMine;

  dwarfMineEntrance.LocationToWest = dwarfMineEntrance;

  // TODO
  sunsetOasis.LocationToSouth = theAcidPits;

  locations.push(mountainPass);
  locations.push(frozenForest);
  locations.push(frozenLake);
  locations.push(yetisDen);
  locations.push(iceCavern);
  locations.push(iceTemple);
  locations.push(abandonedTower);
  locations.push(dwarfMineEntrance);
  locations.push(dwarfMine);

  mountainPass.Region = elsos;
  frozenForest.Region = elsos;
  frozenLake.Region = elsos;
  yetisDen.Region = elsos;
  iceCavern.Region = elsos;
  iceTemple.Region = elsos;
  abandonedTower.Region = elsos;
  dwarfMineEntrance.Region = elsos;
  dwarfMine.Region = elsos;
}

export function itemByID(id) {
  return items.find((item) => item.ID === id) || null;
}

export function recipeByID(id) {
  return recipes.find((recipe) => recipe.ID === id) || null;
}

export function monsterByID(id) {
  return monsters.find((monster) => monster.ID === id) || null;
}

export function questByID(id) {
  return quests.find((quest) => quest.ID === id) || null;
}

export function locationByID(id) {
  return locations.find((location) => location.ID === id) || null;
}

export function regionByID(id) {
  return regions.find((region) => region.ID === id) || null;
}

populateWorld();
