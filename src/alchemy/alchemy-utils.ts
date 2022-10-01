import { alchemyData, alchemyItems } from "./alchemy-data";

export function mix(item1: string, item2: string): string | null {
  if (!alchemyItems.includes(item1) || !alchemyItems.includes(item2)) {
    return null;
  }

  // check if item1 and item2 are mixable
  if (!alchemyData[item1].isMixable || !alchemyData[item2].isMixable) {
    return null;
  }

  if (
    alchemyData[item1].mixWith.item == item2 ||
    alchemyData[item2].mixWith.item == item1
  ) {
    return alchemyData[item1].mixWith.makes;
  } else return null;
}
