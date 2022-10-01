import { alchemyData } from "./alchemy-data";

export type itemData = {
  isPrimitive: boolean;
  isMixable: boolean;
  prettyPrint: string;
  mixWith: {
    item: alchemyItemsType[];
    makes: string;
  }[];
  components: string[];
};

export type alchemyItemsType = keyof typeof alchemyData;

export type alchemyDataType = Record<string, itemData>;
