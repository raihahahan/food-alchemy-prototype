export type itemData = {
  isPrimitive: boolean;
  isMixable: boolean;
  prettyPrint: string;
  mixWith: {
    item: string;
    makes: string;
  };
  components: string[];
};

export type alchemyDataType = Record<string, itemData>;
