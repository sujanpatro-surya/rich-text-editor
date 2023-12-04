import { useState } from "react";
import { TrixEditor } from "./core";
import { Button } from "@surya-digital/leo-reactjs-material-ui";
import { createRoot } from "react-dom/client";

const ReactTrixEditor = (): React.ReactElement => {
  const [htmlContent, setHtmlContent] = useState("Hi, enter something here!");
  const [readOnly, setReadOnly] = useState(false);
  const handleChange = (html: string): void => {
    setHtmlContent(html);
  };
  const handleClick = (): void => {
    console.log("pressed");
    setReadOnly(() => {
      return !readOnly;
    });
  };
  return (
    <>
      <TrixEditor
        value={htmlContent}
        onChange={handleChange}
        uploadURL="https://upload.imagekit.io/api/v1/files/upload"
        readonly={readOnly}
      />
      <Button
        name={"Edit or Save"}
        size="large"
        label={readOnly ? "Save" : "Edit"}
        variant={"filled"}
        onClick={handleClick}
      />
    </>
  );
};

export default ReactTrixEditor;
