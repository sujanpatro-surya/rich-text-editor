import React, { useState, useRef, CSSProperties } from "react";
import {
  AtomicBlockUtils,
  convertToRaw,
  DraftEditorCommand,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import { styles, Media } from "./testUtils";

interface MediaEditorExampleState {
  editorState: EditorState;
  showURLInput: boolean;
  urlValue: string;
  urlType: string;
}

const MediaEditorExample: React.FC = () => {
  const [state, setState] = useState<MediaEditorExampleState>({
    editorState: EditorState.createEmpty(),
    showURLInput: false,
    urlValue: "",
    urlType: "",
  });

  const editorRef = useRef<Editor>(null);

  const focus = () => editorRef.current?.focus();

  const logState = () => {
    const content = state.editorState.getCurrentContent();
    console.log(convertToRaw(content));
  };

  const onChange = (editorState: EditorState) =>
    setState({ ...state, editorState });

  const onURLChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, urlValue: e.target.value });

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const confirmMedia = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    const { editorState, urlValue, urlType } = state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      urlType,
      "IMMUTABLE",
      { src: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });

    setState(
      {
        editorState: AtomicBlockUtils.insertAtomicBlock(
          newEditorState,
          entityKey,
          " "
        ),
        showURLInput: false,
        urlValue: "",
        urlType: "",
      }
      //   () => {
      //     setTimeout(() => focus(), 0);
      //   }
    );
  };

  const onURLInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      confirmMedia(e);
    }
  };

  const promptForMedia = (type: string) => {
    setState(
      {
        ...state,
        showURLInput: true,
        urlValue: "",
        urlType: type,
      }
      //   () => {
      //     setTimeout(() => editorRef.current?.focus(), 0);
      //   }
    );
  };

  const addAudio = () => promptForMedia("audio");
  const addImage = () => promptForMedia("image");
  const addVideo = () => promptForMedia("video");

  let urlInput;
  if (state.showURLInput) {
    urlInput = (
      <div style={styles.urlInputContainer}>
        <input
          onChange={onURLChange}
          //   ref={editorRef}
          style={styles.urlInput}
          type="text"
          value={state.urlValue}
          onKeyDown={onURLInputKeyDown}
        />
        <button onMouseDown={confirmMedia}>Confirm</button>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      <div style={{ marginBottom: 10 }}>
        Use the buttons to add audio, image, or video.
      </div>
      <div style={{ marginBottom: 10 }}>
        Here are some local examples that can be entered as a URL:
        <ul>
          <li>media.mp3</li>
          <li>media.png</li>
          <li>media.mp4</li>
        </ul>
      </div>
      <div style={styles.buttons}>
        <button onMouseDown={addAudio} style={{ marginRight: 10 }}>
          Add Audio
        </button>
        <button onMouseDown={addImage} style={{ marginRight: 10 }}>
          Add Image
        </button>
        <button onMouseDown={addVideo} style={{ marginRight: 10 }}>
          Add Video
        </button>
      </div>
      {urlInput}
      <div style={styles.editor} onClick={focus}>
        <Editor
          blockRendererFn={mediaBlockRenderer}
          editorState={state.editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
          placeholder="Enter some text..."
          ref={editorRef}
        />
      </div>
      <input
        onClick={logState}
        style={styles.button}
        type="button"
        value="Log State"
      />
    </div>
  );
};

const mediaBlockRenderer = (block: any) => {
  if (block.getType() === "atomic") {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
};

export default MediaEditorExample;
