import { useState } from "react";
import getRemirrorExtensions from "./extensions";
import {
  ReactExtensions,
  UseRemirrorReturn,
  useRemirror,
} from "@remirror/react";
import {
  AnyExtension,
  RemirrorEventListener,
  RemirrorEventListenerProps,
} from "remirror";

export interface UseContentEditorReturnType {
  editor: UseRemirrorReturn<ReactExtensions<any>>;
  onEditorChange: RemirrorEventListener<AnyExtension>;
  setContent: (content: string) => void;
  markdownContent: string;
  htmlContent: string;
}

const useContentEditor = (value: string): UseContentEditorReturnType => {
  const [markdownContent, setMarkdownContent] = useState(value);
  const [htmlContent, setHtmlContent] = useState(value);
  const extensions = getRemirrorExtensions;
  const editor = useRemirror({
    extensions,
    stringHandler: "markdown",
    content: value,
  });

  const { onChange, manager } = editor;

  const onEditorChange = (
    parameter: RemirrorEventListenerProps<
      ReactExtensions<ReturnType<typeof extensions>[number]>
    >
  ): void => {
    const updatedMarkdownContent = parameter.helpers.getMarkdown(
      parameter.state
    );
    setMarkdownContent(updatedMarkdownContent);
    const updatedHTMLContent = parameter.helpers.getHTML(parameter.state);
    setHtmlContent(updatedHTMLContent);
    console.log(parameter.helpers.getJSON(parameter.state));
    onChange(parameter);
  };

  const setContent = (value: string) => {
    manager.view.updateState(
      manager.createState({
        content: value,
        stringHandler: "markdown",
      })
    );
    setMarkdownContent(value);
  };

  return {
    editor,
    onEditorChange,
    setContent,
    markdownContent,
    htmlContent,
  };
};

export default useContentEditor;
