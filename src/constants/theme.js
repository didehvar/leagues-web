import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import deepPurple from 'material-ui/colors/deepPurple';
import teal from 'material-ui/colors/teal';

export const theme = {
  palette: createPalette({
    primary: teal,
    accent: deepPurple
  })
};

export const muiTheme = createMuiTheme(theme);
