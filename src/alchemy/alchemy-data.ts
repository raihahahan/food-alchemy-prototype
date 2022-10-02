import {
  alchemyItemsDataType,
  extractionDataType,
  mixtureDataType,
} from "./alchemy-types";

export const alchemyItemData: alchemyItemsDataType = [
  {
    id: "0",
    name: "iceCream",
    prettyPrint: "Ice-cream",
    imgSrc: null,
  },
  {
    id: "1",
    name: "banana",
    prettyPrint: "Banana",
    imgSrc: null,
  },
  {
    id: "2",
    name: "bananaSplit",
    prettyPrint: "Banana Split",
    imgSrc: null,
  },
  {
    id: "3",
    name: "milk",
    prettyPrint: "Milk",
    imgSrc: null,
  },
  {
    id: "4",
    name: "whippingCream",
    prettyPrint: "Whipping cream",
    imgSrc: null,
  },
  {
    id: "5",
    name: "bread",
    prettyPrint: "Bread",
    imgSrc: null,
  },
  {
    id: "6",
    name: "chickenHam",
    prettyPrint: "Chicken ham",
    imgSrc: null,
  },
  {
    id: "7",
    name: "cheese",
    prettyPrint: "Cheese",
    imgSrc: null,
  },
  {
    id: "8",
    name: "chickenHamCheeseSandwich",
    prettyPrint: "Chicken ham and cheese sandwich",
    imgSrc: null,
  },
  {
    id: "9",
    name: "flour",
    prettyPrint: "Flour",
    imgSrc: null,
  },
  {
    id: "10",
    name: "yeast",
    prettyPrint: "Yeast",
    imgSrc: null,
  },
  {
    id: "11",
    name: "cocoa",
    prettyPrint: "Cocoa",
    imgSrc: null,
  },
  {
    id: "12",
    name: "butter",
    prettyPrint: "Butter",
    imgSrc: null,
  },
  {
    id: "13",
    name: "sugar",
    prettyPrint: "Sugar",
    imgSrc: null,
  },
  {
    id: "14",
    name: "water",
    prettyPrint: "Water",
    imgSrc: null,
  },
  {
    id: "15",
    name: "chocolateMilk",
    prettyPrint: "Chocolate Milk",
    imgSrc: null,
  },
  {
    id: "16",
    name: "chicken",
    prettyPrint: "Chicken",
    imgSrc: null,
  },
  {
    id: "17",
    name: "rice",
    prettyPrint: "Rice",
    imgSrc: null,
  },
  {
    id: "18",
    name: "grains",
    prettyPrint: "Grains",
    imgSrc: null,
  },
  {
    id: "19",
    name: "sugarCane",
    prettyPrint: "Sugar Cane",
    imgSrc: null,
  },
  {
    id: "20",
    name: "cake",
    prettyPrint: "Cake",
    imgSrc: null,
  },
  {
    id: "21",
    name: "salt",
    prettyPrint: "Salt",
    imgSrc: null,
  },
  {
    id: "22",
    name: "bakingSoda",
    prettyPrint: "Baking Soda",
    imgSrc: null,
  },
  {
    id: "23",
    name: "egg",
    prettyPrint: "Egg",
    imgSrc: null,
  },
  {
    id: "24",
    name: "chocolateCake",
    prettyPrint: "Chocolate Cake",
    imgSrc: null,
  },
  {
    id: "25",
    name: "liveChicken",
    prettyPrint: "Live chicken",
    imgSrc: null,
  },
  {
    id: "26",
    name: "cow",
    prettyPrint: "Cow",
    imgSrc: null,
  },
  {
    id: "27",
    name: "steak",
    prettyPrint: "Beef steak",
    imgSrc: null,
  },
  {
    id: "28",
    name: "tropics",
    prettyPrint: "Tropics",
    imgSrc: null,
  },
  {
    id: "29",
    name: "vanilla",
    prettyPrint: "Vanilla",
    imgSrc: null,
  },
  {
    id: "30",
    name: "mushroom",
    prettyPrint: "Mushroom",
    imgSrc: null,
  },
  {
    id: "31",
    name: "farm",
    prettyPrint: "Farm",
    imgSrc: null,
  },
  {
    id: "32",
    name: "sheep",
    prettyPrint: "Sheep",
    imgSrc: null,
  },
  {
    id: "33",
    name: "mutton",
    prettyPrint: "Mutton",
    imgSrc: null,
  },
  {
    id: "34",
    name: "crops",
    prettyPrint: "Crops",
    imgSrc: null,
  },
  {
    id: "35",
    name: "corn",
    prettyPrint: "Corn",
    imgSrc: null,
  },
  {
    id: "36",
    name: "sea",
    prettyPrint: "Sea",
    imgSrc: null,
  },
  {
    id: "37",
    name: "saltWater",
    prettyPrint: "Salt water",
    imgSrc: null,
  },
  {
    id: "38",
    name: "fish",
    prettyPrint: "Fish",
    imgSrc: null,
  },
  {
    id: "39",
    name: "stingRay",
    prettyPrint: "Stingray",
    imgSrc: null,
  },
  {
    id: "40",
    name: "squid",
    prettyPrint: "Squid",
    imgSrc: null,
  },
  {
    id: "41",
    name: "pig",
    prettyPrint: "Pig",
    imgSrc: null,
  },
  {
    id: "42",
    name: "pork",
    prettyPrint: "Pork",
    imgSrc: null,
  },
];

export const alchemyMixturesData: mixtureDataType = [
  { mixture: ["milk", "whippingCream"], makes: ["iceCream"] },
  { mixture: ["banana", "iceCream"], makes: ["bananaSplit"] },
  { mixture: ["flour", "yeast", "water", "sugar"], makes: ["bread"] },
  {
    mixture: ["chickenHam", "cheese", "bread"],
    makes: ["chickenHamCheeseSandwich"],
  },
  {
    mixture: ["cocoa", "milk", "butter", "sugar", "water"],
    makes: ["chocolate"],
  },
  {
    mixture: ["milk", "chocolate"],
    makes: ["chocolateMilk"],
  },
  {
    mixture: ["water", "grains"],
    makes: ["rice"],
  },
  {
    mixture: ["flour", "egg", "butter", "sugar", "salt", "milk", "bakingSoda"],
    makes: ["cake"],
  },
  {
    mixture: ["cake", "chocolate"],
    makes: ["chocolateCake"],
  },
];

export const alchemyExtractionsData: extractionDataType = [
  { from: "grains", to: ["flour"] },
  { from: "sugarCane", to: ["sugar"] },
  { from: "milk", to: ["cheese", "whippingCream"] },
  { from: "chicken", to: ["chickenHam"] },
  { from: "whippingCream", to: ["butter"] },
  { from: "liveChicken", to: ["chicken", "egg"] },
  { from: "cow", to: ["steak", "milk"] },
  {
    from: "tropics",
    to: ["cocoa", "banana", "vanilla", "mushroom", "sugarCane"],
  },
  {
    from: "farm",
    to: ["liveChicken", "cow", "sheep", "pig"],
  },
  { from: "sheep", to: ["mutton"] },
  { from: "crops", to: ["grains", "corn"] },
  { from: "sea", to: ["saltWater", "fish", "stingRay", "squid"] },
  { from: "saltWater", to: ["salt", "water"] },
  { from: "pig", to: ["pork"] },
];

export const primitives: alchemyItemsDataType = alchemyItemData.filter((i) => {
  const name = i.name;
  const toFindMix = alchemyMixturesData.filter((j) => j.makes.includes(name));
  const toFindExtract = alchemyExtractionsData.filter((k) =>
    k.to.includes(name)
  );
  return toFindMix.length + toFindExtract.length == 0;
});
