import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  spacing: {
    page: '1em 1.25em',
    gap: 16,
    maxWidth: '60em',
  },
});
