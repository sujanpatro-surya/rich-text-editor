import { Box, Toolbar } from "@mui/material";
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
  ToggleCodeBlockButton,
  CreateTableButton,
  useCommands,
  TableComponents,
} from "@remirror/react";
import { AnyExtension, RemirrorEventListener } from "remirror";
import { AllStyledComponent } from "@remirror/styles/emotion";
import { typographyStyles } from "../../theme/typography/typographyStyles";

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
    // <AllStyledComponent>
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
    // </AllStyledComponent>
  );
};

export default RemirrorEditor;
