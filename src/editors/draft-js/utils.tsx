import React from "react";
import { EditorState, ContentBlock } from "draft-js";

// Style map
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

// Block style function
const getBlockStyle = (block: ContentBlock) => {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return "";
  }
};

// Style button component
interface StyleButtonProps {
  onToggle: (style: string) => void;
  style: string;
  label: string;
  active: boolean;
}

const StyleButton: React.FC<StyleButtonProps> = (props) => {
  const { onToggle, style, label, active } = props;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle(style);
  };

  let className = "RichEditor-styleButton";
  if (active) {
    className += " RichEditor-activeButton";
  }

  return (
    <span className={className} onMouseDown={handleToggle}>
      {label}
    </span>
  );
};

// Block types
const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

// Block style controls component
interface BlockStyleControlsProps {
  editorState: EditorState;
  onToggle: (style: string) => void;
}

const BlockStyleControls: React.FC<BlockStyleControlsProps> = (props) => {
  const { editorState, onToggle } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

// Inline styles
const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

// Inline style controls component
interface InlineStyleControlsProps {
  editorState: EditorState;
  onToggle: (style: string) => void;
}

const InlineStyleControls: React.FC<InlineStyleControlsProps> = (props) => {
  const { editorState, onToggle } = props;
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export {
  styleMap,
  getBlockStyle,
  BlockStyleControls,
  INLINE_STYLES,
  InlineStyleControls,
};
