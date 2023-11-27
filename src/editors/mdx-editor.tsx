import "@mdxeditor/editor/style.css";
import "./style.css";
import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  markdownShortcutPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
} from "@mdxeditor/editor";
import { useRef, useState } from "react";
const MdxEditor = (): React.ReactElement => {
  const mdRef = useRef<MDXEditorMethods>(null);
  const [mdState, setMdState] = useState(`Hello 
  - - -
  World
  - - -
  `);
  return (
    <MDXEditor
      className="editorHeaderOne"
      ref={mdRef}
      markdown={mdState}
      plugins={[
        headingsPlugin(),
        markdownShortcutPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        toolbarPlugin({
          toolbarContents: (): React.ReactElement => {
            return (
              <>
                <BoldItalicUnderlineToggles />
              </>
            );
          },
        }),
      ]}
      onChange={setMdState}
    />
  );
};

export default MdxEditor;
