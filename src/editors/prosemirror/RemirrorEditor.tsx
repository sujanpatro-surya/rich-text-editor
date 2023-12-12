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
  HistoryButtonGroup,
} from "@remirror/react";
import { AnyExtension, RemirrorEventListener } from "remirror";
import { AllStyledComponent } from "@remirror/styles/emotion";
import { typographyStyles } from "../../theme/typography/typographyStyles";
import { AlertCircle } from "@surya-digital/leo-reactjs-material-ui";
import { useState } from "react";

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
  const [editableState, setEditableState] = useState(true);
  return (
    <AllStyledComponent>
      <>
        <Remirror
          manager={manager}
          state={state}
          onChange={onChange}
          autoFocus
          editable={editableState}
        >
          {editableState ? (
            <Toolbar>
              <HistoryButtonGroup />
              <BasicFormattingButtonGroup />
              <HeadingLevelButtonGroup showAll />
              <ToggleOrderedListButton />
              <ToggleBulletListButton />
              <ToggleBlockquoteButton />
              <ToggleCodeBlockButton />
              <CreateTableButton />
            </Toolbar>
          ) : (
            <></>
          )}
          <EditorComponent />
          <TableComponents />
          <AddEmbedButton />
        </Remirror>
        <button onClick={() => setEditableState(!editableState)}>
          save/edit
        </button>
      </>
    </AllStyledComponent>
  );
};

export default RemirrorEditor;
