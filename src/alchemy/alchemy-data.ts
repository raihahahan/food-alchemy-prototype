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
    isInfinite: false,
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
    isInfinite: true,
  },
  bananaSplit: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Banana Split",
    components: ["banana, iceCream"],
    mixWith: [
      {
        item: [],
        makes: "",
      },
    ],
    isInfinite: false,
  },
  milk: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Milk",
    mixWith: [
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
    isInfinite: true,
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
    isInfinite: true,
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
    isInfinite: false,
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
    isInfinite: true,
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
    isInfinite: true,
  },
  sandwich: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Sandwich",
    mixWith: [
      {
        item: [],
        makes: "",
      },
    ],
    components: ["ham, cheese, bread"],
    isInfinite: false,
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
    isInfinite: true,
  },
  yeast: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Yeast",
    mixWith: [
      {
        item: ["flour", "water"],
        makes: "bread",
      },
    ],
    components: [],
    isInfinite: true,
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
    isInfinite: false,
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
    isInfinite: true,
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
    isInfinite: true,
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
    ],
    components: [],
    isInfinite: true,
  },
  chocolateMilk: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Chocolate Milk",
    mixWith: [],
    components: ["milk", "chocolate"],
    isInfinite: false,
  },
  chocolate: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Chocolate",
    mixWith: [],
    components: ["milk", "butter", "sugar", "cocoa", "water"],
    isInfinite: true,
  },
};

export const alchemyItems = Object.keys(alchemyData);
export const infiniteResource = Object.entries(alchemyData)
  .filter((i) => i[1].isInfinite)
  .map((j) => j[0]);
