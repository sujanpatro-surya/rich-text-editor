import "@mdxeditor/editor/style.css";
import { MDXEditor, headingsPlugin } from "@mdxeditor/editor";
const SomeThing = (): React.ReactElement => {
  return <MDXEditor markdown={"# Hello World"} plugins={[headingsPlugin()]} />;
};

export default SomeThing;
