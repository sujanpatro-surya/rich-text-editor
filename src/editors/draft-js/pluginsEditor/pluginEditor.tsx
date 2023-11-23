import React, { useRef, useState, FC } from "react";
import { convertFromRaw, EditorState, RawDraftContentState } from "draft-js";
import Editor, { composeDecorators } from "@draft-js-plugins/editor";
import createImagePlugin from "@draft-js-plugins/image";
import createFocusPlugin from "@draft-js-plugins/focus";
import createBlockDndPlugin from "@draft-js-plugins/drag-n-drop";
import editorStyles from "./editorStyles.module.css";
import "@draft-js-plugins/image/lib/plugin.css";

const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [blockDndPlugin, focusPlugin, imagePlugin];

const initialState: RawDraftContentState = {
  entityMap: {
    0: {
      type: "IMAGE",
      mutability: "IMMUTABLE",
      data: {
        src: "/images/canada-landscape-small.jpg",
      },
    },
  },
  blocks: [
    {
      key: "9gm3s",
      text: "You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: "ov7r",
      text: " ",
      type: "atomic",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: "e23a8",
      text: "You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin …",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const CustomImageEditor = (): React.ReactElement => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createWithContent(convertFromRaw(initialState))
  );

  const editorRef = useRef<Editor>(null);

  const onChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  const focus = () => {
    editorRef.current?.focus();
  };

  return (
    <div>
      <div className={editorStyles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default CustomImageEditor;
