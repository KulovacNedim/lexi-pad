import { $getSelection, $isRangeSelection, LexicalEditor } from "lexical";
import { $setBlocksType } from '@lexical/selection';
import { CommandHandlers, LexCommand, LexNode } from "../types/commandTypes";
import { commandHandlers } from "./commandHandlers";
import { PredefinedToolbarCommands } from "../types/toolbar-commands";


type ToolbarActionHandler = {
    editor: LexicalEditor,
    command: PredefinedToolbarCommands
}

export const handleToolbarAction = ({ editor, command }: ToolbarActionHandler) => {
    const handler = commandHandlers[command.name as keyof CommandHandlers];
    if (!handler) return
    if (handler.type === 'dispatch') {
        editor.dispatchCommand(handler.command as LexCommand, handler.options);
    }
    if (handler.type === 'update') {
        editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                $setBlocksType(selection, handler.command as LexNode)
            }
        })
    }
}