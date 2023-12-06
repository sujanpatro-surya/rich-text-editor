import { Box } from "@mui/material";
import { EditorContent, useEditor, Editor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Image as TipTapImage } from "@tiptap/extension-image";
import axios from "axios";
import "./styles.css";
import { EditorView } from "prosemirror-view";
import { useState } from "react";

const TipTapEditor = (): React.ReactElement => {
  const [content, setContent] = useState(initialContent);
  const editor = useEditor({
    extensions: editorExtensions,
    content: content,
    editable: true,
    editorProps: {
      handleDrop(view, event, slice, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          let file = event.dataTransfer.files[0];
          if (supportedImageTypes.includes(file.type))
            handleImage(file, view, event, editor);
          else {
            console.log(file.type);
            return false;
          }
          return true;
        }
        return false;
      },
    },
    onUpdate(props) {
      console.log("\nJSON content:\n", props.editor.getJSON());
      console.log("\nHTML content:\n", props.editor.getHTML());
      setContent(props.editor.getHTML());
    },
  });
  return (
    <Box>
      <EditorContent editor={editor} />
    </Box>
  );
};

const editorExtensions = [
  StarterKit,
  TipTapImage.configure({ allowBase64: false, inline: true }),
];

const initialContent = `
    <h2>
    Hi there,
    </h2>
    <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
    <li>
        That's a bullet list with one …
    </li>
    <li>
        … or two list items.
    </li>
    </ul>
    <p>
    Isn't that great? And all of that is editable. But wait, there's more. Let's try a code block:
    </p>
    <pre><code class="language-css">body {
    display: none;
    }</code></pre>
    <p>
    I know, I know, this is impressive. It's only the tip of the iceberg though. Give it a try and click a little bit around. Don't forget to check the other examples too.
    </p>
    <blockquote>
    Wow, that's amazing. Good work, boy! 👏
    <br />
    — Mom
    </blockquote>
    `;

const handleFile = (file: File, view: EditorView, event: DragEvent): void => {
  console.log("file detected");
  uploadImage(file).then((url: string) => {
    console.log("url found.", url);
    // editor?.chain().focus().setImage({ src: url });
    const { schema } = view.state;
    const coordinates = view.posAtCoords({
      left: event.clientX,
      top: event.clientY,
    });
    const node = schema.nodes.image.create({ src: url }); // creates the image element
    const transaction = view.state.tr.insert(coordinates!.pos, node); // places it in the correct position
    return view.dispatch(transaction);
  });
};

const handleImage = (
  file: File,
  view: EditorView,
  event: DragEvent,
  editor: Editor | null
): void => {
  console.log("image detected");
  const urlType = window.URL || window.webkitURL;
  const img = new Image();
  img.src = urlType.createObjectURL(file);
  img.onload = () => {
    console.log("image.onLoad called");
    uploadImage(file).then((url: string) => {
      console.log("url found.", url);
      // editor?.commands.insertContent();
      const { schema } = view.state;
      const coordinates = view.posAtCoords({
        left: event.clientX,
        top: event.clientY,
      });
      const node = schema.nodes.image.create({ src: url }); // creates the image element
      const transaction = view.state.tr.insert(coordinates!.pos, node); // places it in the correct position
      return view.dispatch(transaction);
    });
  };
};

const supportedImageTypes: string[] = ["image/png", "image/jpeg", "image/gif"];

const uploadImage = (imageFile: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(imageFile);
      resolve("https://via.placeholder.com/600/24f355");
    }, 2000);
  });
};

export default TipTapEditor;
