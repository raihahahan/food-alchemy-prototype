import { alchemyData, alchemyItems } from "./alchemy-data";

export function mix(items: string[]): string | null {
  for (let item of items) {
    if (
      !alchemyItems.includes(item) ||
      !alchemyItems.includes(item) ||
      !alchemyData[item].isMixable
    )
      return null;
  }

  for (let item of items) {
    const toFind = alchemyData[item].mixWith;
    for (let j of toFind.item) {
      if (!items.includes(j)) return null;
    }
    return toFind.makes;
  }

  return null;
}
