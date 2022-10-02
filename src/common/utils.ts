import fs from "fs";

export const compareArr = (arr1: any[], arr2: any[]): boolean => {
  const array2Sorted = arr2.slice().sort();
  return (
    arr1.length === arr2.length &&
    arr1
      .slice()
      .sort()
      .every(function (value, index) {
        return value === array2Sorted[index];
      })
  );
};

export function readFile(path: string, func: (i: string) => void) {
  // helper function to read a file that accepts func,
  // which is the function applied to each line
  const data = fs.readFileSync(path, "utf-8");
  const arr = data.split("\n");
  arr.forEach((item) => {
    func(item);
  });
}
