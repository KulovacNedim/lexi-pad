import { defaultToolbar } from '../config/default-toolbar';
import { RecursivePartial } from '../types/recursive-partial';
import { ToolbarConfig } from '../types/toolbar';

// Generalized mergeArray function for merging arrays of objects
const mergeArray = <T extends { name: string }>(
  defaultArray: T[],
  userArray?: RecursivePartial<T>[]
): T[] => {
  const mergedArray = [...defaultArray];

  if (!userArray || userArray.length === 0) {
    return mergedArray;
  }

  for (const userItem of userArray) {
    const defaultItem = mergedArray.find(
      (item) => item.name === userItem?.name
    );

    if (defaultItem) {
      // Recursively merge item properties
      Object.assign(defaultItem, deepMerge(defaultItem, userItem));
    } else {
      // Add new item from user input
      mergedArray.push(userItem as T);
    }
  }

  return mergedArray;
};

// Deep merging function to merge objects, arrays, and other values
const deepMerge = <T>(defaultObj: T, userObj?: RecursivePartial<T>): T => {
  if (!userObj) {
    return defaultObj;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const merged: any = { ...defaultObj };

  for (const key in userObj) {
    if (userObj[key] !== undefined) {
      if (Array.isArray(userObj[key])) {
        // Merge arrays (e.g. items or groups)
        merged[key] = mergeArray(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          defaultObj[key] as any[],
          userObj[key] as RecursivePartial<T>[]
        );
      } else if (typeof userObj[key] === 'object' && userObj[key] !== null) {
        // Merge objects recursively
        merged[key] = deepMerge(defaultObj[key], userObj[key]);
      } else {
        // Assign scalar values (string, boolean, number, etc.)
        merged[key] = userObj[key];
      }
    }
  }

  return merged;
};

export const mergeToolbar = (
  toolbar?: RecursivePartial<ToolbarConfig>
): ToolbarConfig => {
  return deepMerge(defaultToolbar, toolbar);
};
