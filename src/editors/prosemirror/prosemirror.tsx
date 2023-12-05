import { Box, Stack } from "@mui/material";
import useContentEditor from "./useContentEditor";
import RemirrorEditor from "./RemirrorEditor";

const initialValue = `This is a rich text editor demo.

  It supports **bold**, _italic_, \`code\`, and ~~strikethrough~~ formatting.
  
  > Blockquotes are supported as well
  
  \`\`\`js
  // And so are
  console.log("Code blocks with syntax highlighting");
  \`\`\`
  
  - Lists
  - Work
  - As well
  
  | Name                 | Type                | Description                                                                                                                                                                                                          |
| -------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isDisabled         | boolean             | If true, component is disabled.                                                                                                                                                                                    |
| isRequired         | boolean             | If true, input is required.                                                                                                                                                                                        |
| name*              | string              | Name attribute of the input element.                                                                                                                                                                                 |
| value*             | string              | Value of the input element, required for a controller component.                                                                                                                                                     |
| onTextChange*      | Function            | Callback fired when the value is changed. Consists of two parameters - value : Updated input value,error : Returns error when the maxCharacterLength is exceeded i.e. CharacterLimitExceededError, else undefined. |
| placeholder        | string              | The short hint displayed in the input before the user enters a value.                                                                                                                                                |
| label*             | string              | Label of the input.                                                                                                                                                                                                  |
| error              | boolean             | If true, the input will indicate an error.                                                                                                                                                                         |
| maxCharacterLength | number              | Maximum length of the text.                                                                                                                                                                                          |
| helperText         | string              | Helper text displayed below the input field.                                                                                                                                                                         |
| helperTextColor    | string              | Color of the helper text, if not specified it will be defaulted to label[300].                                                                                                                                       |
| numberOfRows       | number              | Number of rows, default is 3. Minimum number of rows is 3.                                                                                                                                                       |
| style              | React.CSSProperties | Prop of type React.CSSProperties if further customization of textarea input field is required. 
  
  1. And numbered ones
  2. Behave similarly`;

const ProseMirror = (): React.ReactElement => {
  const { editor, onEditorChange, markdownContent, htmlContent, setContent } =
    useContentEditor(initialValue);

  return (
    <Stack>
      <RemirrorEditor editor={editor} onChange={onEditorChange} />

      <pre style={{ width: "400px" }}>{markdownContent}</pre>
      {/* <pre style={{ width: "400px" }}>{htmlContent}</pre> */}
    </Stack>
  );
};

export default ProseMirror;
