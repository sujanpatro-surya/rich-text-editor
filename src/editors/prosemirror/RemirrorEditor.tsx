import {
  UseRemirrorReturn,
  ReactExtensions,
  Remirror,
  EditorComponent,
  BasicFormattingButtonGroup,
  HeadingLevelButtonGroup,
  ToggleBlockquoteButton,
  ToggleBulletListButton,
  ToggleOrderedListButton,
  ToggleBoldButton,
  ToggleCodeBlockButton,
  CreateTableButton,
  useCommands,
  TableComponents,
  ToggleTaskListButton,
  ListButtonGroup,
  Toolbar,
} from "@remirror/react";
import { AnyExtension, RemirrorEventListener } from "remirror";
import { AllStyledComponent } from "@remirror/styles/emotion";
import { typographyStyles } from "../../theme/typography/typographyStyles";
import { AlertCircle, Button } from "@surya-digital/leo-reactjs-material-ui";

const AddEmbedButton = () => {
  const commands = useCommands();
  const handleClick = () =>
    commands.addIframe({
      src: "https://remirror.io/",
      height: 250,
      width: 500,
    });
  return <button onClick={handleClick}>Add embed</button>;
};

const RemirrorEditor = ({
  editor: { manager, state },
  onChange,
}: {
  editor: UseRemirrorReturn<ReactExtensions<AnyExtension>>;
  onChange: RemirrorEventListener<AnyExtension>;
}): React.ReactElement => {
  return (
    <AllStyledComponent>
      <>
        <Remirror
          manager={manager}
          state={state}
          onChange={onChange}
          autoFocus
          editable={true}
        >
          <Toolbar>
            <BasicFormattingButtonGroup />
            <HeadingLevelButtonGroup showAll />
            <ToggleOrderedListButton />
            <ToggleBulletListButton />
            <ToggleBlockquoteButton />
            <ToggleCodeBlockButton />
            <CreateTableButton />
          </Toolbar>
          <EditorComponent />
          <TableComponents />
          <AddEmbedButton />
        </Remirror>
      </>
    </AllStyledComponent>
  );
};

export default RemirrorEditor;
