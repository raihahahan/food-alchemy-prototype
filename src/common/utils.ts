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
