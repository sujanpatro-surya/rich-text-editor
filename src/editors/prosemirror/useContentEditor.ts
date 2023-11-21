import { useState } from "react";
import getRemirrorExtensions from "./extensions";
import {
  ReactExtension,
  ReactExtensions,
  UseRemirrorContextType,
  UseRemirrorReturn,
  useRemirror,
} from "@remirror/react";
import {
  AnyExtension,
  RemirrorEventListener,
  RemirrorEventListenerProps,
} from "remirror";
import { HeadingExtension } from "remirror/extensions";

export interface UseContentEditorReturnType {
  editor: UseRemirrorReturn<ReactExtensions<any>>;
  onEditorChange: RemirrorEventListener<AnyExtension>;
  markdownContent: string;
  setContent: (content: string) => void;
}

const useContentEditor = (value: string): UseContentEditorReturnType => {
  const [markdownContent, setMarkdownContent] = useState(value);
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
  };
};

export default useContentEditor;
