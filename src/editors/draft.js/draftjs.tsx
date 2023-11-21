import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { Box } from "@mui/material";

const DraftJS = (): React.ReactElement => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Box width="500px" height="500px" sx={{ border: " 1px solid black" }}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </Box>
  );
};

export default DraftJS;
