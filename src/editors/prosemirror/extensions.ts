import {
  BlockquoteExtension,
  BoldExtension,
  HeadingExtension,
  ImageExtension,
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
import {
  createSlowFileUploader,
  FileExtension,
} from "@remirror/extension-file";
import languages from "./languages";
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

const getRemirrorExtensions = () => [
  new HeadingExtension(),
  new BoldExtension({}),
  new ItalicExtension(),
  new UnderlineExtension(),
  new ImageExtension({ enableResizing: true }),
  new OrderedListExtension(),
  new LinkExtension({ autoLink: true }),
  new BulletListExtension({ enableSpine: true }),
  new StrikeExtension(),
  new TextHighlightExtension(),
  new BlockquoteExtension(),
  new MarkdownExtension({ copyAsMarkdown: true }),
  new CodeExtension(),
  new ExtendedCodeBlockExtension({
    supportedLanguages: languages,
  }),
  new FileExtension({ uploadFileHandler: createSlowFileUploader }),
  // new MentionAtomExtension({ matchers: matchers, mentionTag: "@" }),
];

export default getRemirrorExtensions;
