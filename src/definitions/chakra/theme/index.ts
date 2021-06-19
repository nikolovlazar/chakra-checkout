import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import colors from './foundations/colors';
import fontSizes from './foundations/fontSizes';
import components from './components';

const overrides = {
  ...styles,
  colors,
  fontSizes,
  components,
};

const theme = extendTheme(
  overrides
);

export default theme;
