import { defaultToolbar } from '../config/default-toolbar';
import { RecursivePartial } from '../types/recursive-partial';
import { ToolbarConfig } from '../types/toolbar';
import {
  CustomComponentGroup,
  ToolbarGroup,
  WithBaseGroup,
} from '../types/toolbar-groups';

// Validation function
const validateToolbarGroup = (
  group: RecursivePartial<ToolbarGroup>
): group is ToolbarGroup => {
  // Ensure "type" field is set, default to "rich-text" if not
  if (!group.type) {
    console.warn(
      `Toolbar Configuration: Group "${group.name}" is missing 'type'. Defaulting to 'rich-text'.`
    );
    group.type = 'rich-text';
  }

  // Validate for custom-component groups
  if (group.type === 'custom-component') {
    const customGroup = group as RecursivePartial<
      WithBaseGroup<CustomComponentGroup>
    >;

    // Ensure all required WithBaseGroup fields are present
    const requiredFields = [
      'name',
      'position',
      'hidden',
      'dropdown',
      'align',
      'renderComponent',
    ];
    for (const field of requiredFields) {
      if (customGroup[field as keyof typeof customGroup] === undefined) {
        console.error(
          `Toolbar Configuration: Custom component group "${group.name}" is missing '${field}'. Removing group.`
        );
        return false; // Invalid group, discard it
      }
    }
  }

  // If all checks pass, return true (valid group)
  return true;
};

// Validate toolbar groups
const validateToolbarGroups = (
  groups: RecursivePartial<ToolbarGroup>[] | undefined
): ToolbarGroup[] => {
  if (!groups || groups.length === 0) return [];

  return groups.filter(validateToolbarGroup) as ToolbarGroup[];
};

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
  // Validate the user's toolbar groups before merging
  // const validatedGroups =  validateToolbarGroups(toolbar?.groups?.filter(Boolean) as RecursivePartial<ToolbarGroup>[])
  const validatedGroups = validateToolbarGroups(
    toolbar?.groups?.filter((group): group is RecursivePartial<ToolbarGroup> =>
      Boolean(group)
    )
  );

  // Merge validated groups with the default toolbar
  const mergedToolbar = deepMerge(defaultToolbar, {
    ...toolbar,
    groups: validatedGroups,
  });

  return mergedToolbar;
};

export const convertToCamelCase = (iconName: string) => {
  return iconName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};
