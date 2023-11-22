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
  
  1. And numbered ones
  2. Behave similarly`;

const ProseMirror = (): React.ReactElement => {
  const { editor, onEditorChange, markdownContent, htmlContent, setContent } =
    useContentEditor(initialValue);

  return (
    <Box>
      <RemirrorEditor editor={editor} onChange={onEditorChange} />

      <pre>{markdownContent}</pre>
      <pre>{htmlContent}</pre>
    </Box>
  );
};

export default ProseMirror;
