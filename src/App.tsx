import "./App.css";
import { ThemeConfig } from "@surya-digital/leo-reactjs-material-ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkColorPalette } from "./theme/color-palette/darkColorPalette";
import { lightColorPalette } from "./theme/color-palette/lightColorPalette";
import { typographyStyles } from "./theme/typography/typographyStyles";
import ReactTrixEditor from "./editors/ReactTrixEditor";

function App() {
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
          <Route path="/" element={<ReactTrixEditor />} />
        </Routes>
      </BrowserRouter>
    </ThemeConfig>
  );
}

export default App;
