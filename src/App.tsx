import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeConfig } from "@surya-digital/leo-reactjs-material-ui";
import { darkColorPalette } from "./theme/color-palette/darkColorPalette";
import { lightColorPalette } from "./theme/color-palette/lightColorPalette";
import { typographyStyles } from "./theme/typography/typographyStyles";
import MediaEditorExample from "./editors/draft-js/addMediaButtonsEditor/testEditor";
import CustomImageEditor from "./editors/draft-js/pluginsEditor/pluginEditor";

export default function App() {
  return (
    <ThemeConfig
      theme="light"
      baseColorTokens={[
        { name: "light", colorTokens: lightColorPalette },
        { name: "dark", colorTokens: darkColorPalette },
      ]}
      typography={typographyStyles}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomImageEditor />} />
        </Routes>
      </BrowserRouter>
    </ThemeConfig>
  );
}
