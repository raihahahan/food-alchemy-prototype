import { alchemyDataType } from "./alchemy-types";

export const alchemyData: alchemyDataType = {
  iceCream: {
    isPrimitive: false,
    isMixable: true,
    prettyPrint: "Ice-Cream",
    mixWith: {
      item: "banana",
      makes: "bananaSplit",
    },
    components: ["milk", "whippingCream"],
  },
  banana: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Banana",
    mixWith: {
      item: "banana",
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
      item: "",
      makes: "",
    },
  },
  milk: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Milk",
    mixWith: {
      item: "whippingCream",
      makes: "iceCream",
    },
    components: [],
  },
  whippingCream: {
    isPrimitive: true,
    isMixable: true,
    prettyPrint: "Whipping Cream",
    mixWith: {
      item: "milk",
      makes: "iceCream",
    },
    components: [],
  },
};

export const alchemyItems = Object.keys(alchemyData);
