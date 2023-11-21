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
} from "@remirror/react";
import { AnyExtension, RemirrorEventListener } from "remirror";
import { AllStyledComponent } from "@remirror/styles/emotion";
import { typographyStyles } from "../../theme/typography/typographyStyles";

const RemirrorEditor = ({
  editor: { manager, state },
  onChange,
}: {
  editor: UseRemirrorReturn<ReactExtensions<AnyExtension>>;
  onChange: RemirrorEventListener<AnyExtension>;
}): React.ReactElement => {
  return (
    // <AllStyledComponent>
    <Remirror manager={manager} state={state} onChange={onChange} autoFocus>
      <Toolbar style={typographyStyles.body1}>
        <BasicFormattingButtonGroup />
        <HeadingLevelButtonGroup showAll />
        <ToggleOrderedListButton />
        <ToggleBulletListButton />
        <ToggleBlockquoteButton />
        <ToggleCodeBlockButton />
      </Toolbar>
      <EditorComponent />
    </Remirror>
    // </AllStyledComponent>
  );
};

export default RemirrorEditor;
