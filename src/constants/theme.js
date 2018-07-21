import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#ffb74d',
    },
  },
  spacing: {
    page: '1rem 1.25rem',
  },
});
