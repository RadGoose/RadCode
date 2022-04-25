export const hasDuplicates = (set: any, items = []) => {
  return set.reduce((duplicates: any, item: any) => {
    return duplicates || items.includes(item) || (items.push(item) && false);
  }, false);
};
