import { alchemyDataType } from "./alchemy-types";

export const alchemyData: alchemyDataType = {
  iceCream: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Ice-Cream",
    mixWith: {
      item: ["banana"],
      makes: "bananaSplit",
    },
    components: ["milk", "whippingCream"],
  },
  banana: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Banana",
    mixWith: {
      item: ["iceCream"],
      makes: "bananaSplit",
    },
    components: [],
  },
  bananaSplit: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Banana Split",
    components: ["banana, iceCream"],
    mixWith: {
      item: [""],
      makes: "",
    },
  },
  milk: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Milk",
    mixWith: {
      item: ["whippingCream"],
      makes: "iceCream",
    },
    components: [],
  },
  whippingCream: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Whipping Cream",
    mixWith: {
      item: ["milk"],
      makes: "iceCream",
    },
    components: [],
  },
  bread: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Bread",
    mixWith: {
      item: ["ham", "cheese"],
      makes: "sandwich",
    },
    components: [],
  },
  ham: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Ham",
    mixWith: {
      item: ["bread", "cheese"],
      makes: "sandwich",
    },
    components: [],
  },
  cheese: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Cheese",
    mixWith: {
      item: ["ham", "bread"],
      makes: "sandwich",
    },
    components: [],
  },
  sandwich: {
    isPrimitive: false,
    isMixable: false,
    prettyPrint: "Sandwich",
    mixWith: {
      item: [],
      makes: "",
    },
    components: ["ham, cheese, bread"],
  },
};

export const alchemyItems = Object.keys(alchemyData);
