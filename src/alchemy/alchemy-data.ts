import { alchemyDataType } from "./alchemy-types";

export const alchemyData: alchemyDataType = {
  iceCream: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Ice-Cream",
    mixWith: [
      {
        item: ["banana"],
        makes: "bananaSplit",
      },
    ],
    components: ["milk", "whippingCream"],
  },
  banana: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Banana",
    mixWith: [
      {
        item: ["iceCream"],
        makes: "bananaSplit",
      },
    ],
    components: [],
  },
  bananaSplit: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Banana Split",
    components: ["banana, iceCream"],
    mixWith: [],
  },
  milk: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Milk",
    mixWith: [
      {
        item: ["butter", "sugar", "water", "cocoa"],
        makes: "chocolate",
      },
      {
        item: ["whippingCream"],
        makes: "iceCream",
      },
      {
        item: ["chocolate"],
        makes: "chocolateMilk",
      },
    ],
    components: [],
  },
  whippingCream: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Whipping Cream",
    mixWith: [
      {
        item: ["milk"],
        makes: "iceCream",
      },
    ],
    components: [],
  },
  bread: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Bread",
    mixWith: [
      {
        item: ["ham", "cheese"],
        makes: "sandwich",
      },
    ],
    components: ["flour", "yeast"],
  },
  ham: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Ham",
    mixWith: [
      {
        item: ["bread", "cheese"],
        makes: "sandwich",
      },
    ],
    components: [],
  },
  cheese: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Cheese",
    mixWith: [
      {
        item: ["ham", "bread"],
        makes: "sandwich",
      },
    ],
    components: [],
  },
  sandwich: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Sandwich",
    mixWith: [],
    components: ["ham, cheese, bread"],
  },
  flour: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Flour",
    mixWith: [
      {
        item: ["yeast", "water"],
        makes: "bread",
      },
    ],
    components: [],
  },
  yeast: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Yeast",
    mixWith: [
      {
        item: ["flour", "water"],
        makes: "bread",
      },
    ],
    components: [],
  },
  cocoa: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Cocoa powder",
    mixWith: [
      {
        item: ["milk", "butter", "sugar", "water"],
        makes: "chocolate",
      },
    ],
    components: [],
  },
  butter: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Butter",
    mixWith: [
      {
        item: ["milk", "cocoa", "sugar", "water"],
        makes: "chocolate",
      },
    ],
    components: [],
  },
  sugar: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Sugar",
    mixWith: [
      {
        item: ["milk", "butter", "cocoa", "water"],
        makes: "chocolate",
      },
    ],
    components: [],
  },
  water: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Water",
    mixWith: [
      {
        item: ["milk", "butter", "sugar", "cocoa"],
        makes: "chocolate",
      },
      {
        item: ["grains"],
        makes: "rice",
      },
    ],
    components: [],
  },
  chocolateMilk: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Chocolate Milk",
    mixWith: [],
    components: ["milk", "chocolate"],
  },
  chocolate: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Chocolate",
    mixWith: [
      {
        item: ["milk"],
        makes: "chocolate",
      },
    ],
    components: ["milk", "butter", "sugar", "cocoa", "water"],
  },
  chicken: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Chicken",
    mixWith: [
      {
        item: ["rice"],
        makes: "chickenRice",
      },
    ],
    components: [],
  },
  rice: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Rice",
    mixWith: [
      {
        item: ["chicken"],
        makes: "chickenRice",
      },
    ],
    components: ["water", "grains"],
  },
  grains: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Grains",
    mixWith: [
      {
        item: ["water"],
        makes: "rice",
      },
    ],
    components: [],
  },
};

export const alchemyItems = Object.keys(alchemyData);
