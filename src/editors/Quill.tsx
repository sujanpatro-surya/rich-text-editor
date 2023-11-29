import React, { useRef, useState } from "react";
import Quill, { QuillOptionsStatic } from "quill";
import "quill/dist/quill.snow.css";

interface ReactQuillWrapperProps {
  value?: string;
  onChange: (content: string) => void;
}

const ReactQuillWrapper: React.FC<ReactQuillWrapperProps> = ({
  value,
  onChange,
}) => {
  const quillRef = useRef<Quill | null>(null);
  const quillContainerRef = useRef<HTMLDivElement | null>(null);

  if (quillContainerRef.current) {
    const quillOptions: QuillOptionsStatic = {
      theme: "snow",
    };

    quillRef.current = new Quill(quillContainerRef.current, quillOptions);

    if (value) {
      quillRef.current.clipboard.dangerouslyPasteHTML(value);
    }

    quillRef.current.on("text-change", () => {
      const content = quillRef.current?.root.innerHTML || "";
      onChange(content);
    });
  }

  return <div ref={quillContainerRef} style={{ height: "400px" }} />;
};

const QuillEditor = (): React.ReactElement => {
  const [content, setContent] = useState("Enter value");
  return <ReactQuillWrapper value={content} onChange={setContent} />;
};

export default QuillEditor;
