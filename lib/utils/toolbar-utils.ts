import { defaultToolbar } from '../config/default-toolbar';
import { RecursivePartial } from '../types/recursive-partial';
import { ToolbarConfig } from '../types/toolbar';
import {
  CustomComponentGroup,
  ToolbarGroup,
  WithBaseGroup,
} from '../types/toolbar-groups';
import { deepMerge } from './common';

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