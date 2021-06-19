import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import "styles/global.css";

import Home from "pages";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
