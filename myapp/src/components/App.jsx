import "../css/App.scss";
import { ButtonGradientCuston } from "../styled/buttonGradient/ButtonGradientCustom";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: grey;
  }
`;

const theme = {
  color: {
    prime: "orange",
  },
};

function App() {
  return (
    <div>
      <GlobalStyle />
      <ButtonGradientCuston>Button</ButtonGradientCuston>
    </div>
  );
}

export default App;
