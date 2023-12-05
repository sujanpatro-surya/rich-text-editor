import {
  BlockquoteExtension,
  BoldExtension,
  HeadingExtension,
  ImageExtension,
  ImageOptions,
  ItalicExtension,
  OrderedListExtension,
  BulletListExtension,
  LinkExtension,
  StrikeExtension,
  TextHighlightExtension,
  UnderlineExtension,
  MarkdownExtension,
  CodeExtension,
  CodeBlockExtension,
  // MentionAtomExtension,
  // MentionAtomExtensionMatcher,
} from "remirror/extensions";
import { TableExtension } from "@remirror/extension-react-tables";
import {
  createSlowFileUploader,
  FileExtension,
} from "@remirror/extension-file";
import languages from "./languages";
import { DelayedPromiseCreator } from "@remirror/core";
import { textblockTypeInputRule } from "@remirror/pm/inputrules";

class ExtendedCodeBlockExtension extends CodeBlockExtension {
  createInputRules() {
    const regexp = /^```([a-zA-Z]+)?(\n|\s)/;
    return [textblockTypeInputRule(regexp, this.type)];
  }
}

// const matchers: MentionAtomExtensionMatcher[] = [
//   {
//     char: "@Sujan",
//     name: "@Sujan",
//   },
//   {
//     char: "@",
//     name: "@Nitin",
//   },
//   {
//     char: "@",
//     name: "@Surya",
//   },
//   {
//     char: "@",
//     name: "@gps",
//   },
// ];

// const imageOptions: ImageOptions = {
//   enableResizing: true,
//   uploadHandler(files) {
//   },
// };

const getRemirrorExtensions = () => [
  new HeadingExtension(),
  new BoldExtension({}),
  new ItalicExtension(),
  new UnderlineExtension(),
  new OrderedListExtension(),
  new ImageExtension(),
  new LinkExtension({ autoLink: true }),
  new BulletListExtension({ enableSpine: true }),
  new StrikeExtension(),
  new TextHighlightExtension(),
  new BlockquoteExtension(),
  new MarkdownExtension({ copyAsMarkdown: true }),
  new CodeExtension(),
  new TableExtension(),
  new ExtendedCodeBlockExtension({
    supportedLanguages: languages,
  }),
  new FileExtension({ uploadFileHandler: createSlowFileUploader }),
  // new MentionAtomExtension({ matchers: matchers, mentionTag: "@" }),
];

export default getRemirrorExtensions;
