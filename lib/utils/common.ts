import { RecursivePartial } from "../types/recursive-partial";


// Generalized mergeArray function for merging arrays of objects
export const mergeArray = <T extends { name: string }>(
    defaultArray: T[],
    userArray?: RecursivePartial<T>[]
  ): T[] => {
    const mergedArray = cloneDeep(defaultArray) as T[];
  
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
export const deepMerge = <T>(defaultObj: T, userObj?: RecursivePartial<T>): T => {
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

export function cloneDeep<T>(value: T): T {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    
    // Handle arrays
    if (Array.isArray(value)) {
        return value.map(item => cloneDeep(item)) as unknown as T;
    }
    
    // Handle objects
    const clonedObject = {} as { [K in keyof T]: T[K] };
    for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            clonedObject[key] = cloneDeep(value[key]);
        }
    }
    
    return clonedObject;
}

export const convertToCamelCase = (iconName: string) => {
    return iconName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
};