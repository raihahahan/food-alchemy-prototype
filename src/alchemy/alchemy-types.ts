export type itemData = {
  isPrimitive: boolean;
  isMixable: boolean;
  prettyPrint: string;
  mixWith: {
    item: string[];
    makes: string;
  }[];
  components: string[];
  isInfinite: boolean;
};

export type alchemyDataType = Record<string, itemData>;
