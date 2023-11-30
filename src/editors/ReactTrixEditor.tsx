import { useState } from "react";
import { TrixEditors } from "./core";

const ReactTrixEditor = (): React.ReactElement => {
  const [htmlContent, setHtmlContent] = useState("Hi, enter something here!");
  const handleChange = (html: string): void => {
    setHtmlContent(html);
  };
  return (
    <TrixEditors
      mergeTags={[]}
      value={htmlContent}
      onChange={handleChange}
      uploadURL="https://upload.imagekit.io/api/v1/files/upload"
    />
  );
};

export default ReactTrixEditor;
