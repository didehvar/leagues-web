import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import purple from 'material-ui/colors/purple';
import teal from 'material-ui/colors/teal';

export const theme = {
  palette: createPalette({
    primary: teal,
    accent: purple
  })
};

export const muiTheme = createMuiTheme(theme);
