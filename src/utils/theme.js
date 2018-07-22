import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: orange,
  },
  spacing: {
    page: '1rem 1.25rem',
    gap: 16,
  },
});
