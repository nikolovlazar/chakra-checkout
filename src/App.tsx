import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";

import Checkout from "pages/checkout";

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Checkout />
    </ChakraProvider>
  );
}

export default App;
