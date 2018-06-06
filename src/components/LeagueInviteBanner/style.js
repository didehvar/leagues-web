import glamorous from 'glamorous';
import MuiToolbar from '@material-ui/core/Toolbar/Toolbar';
import ButtonBase from '@material-ui/core/ButtonBase';

export const Container = glamorous(ButtonBase)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.light} !important`,
  position: 'fixed !important',
  bottom: 57,
  left: 'auto',
  right: 0,
  width: '100%',
  zIndex: 1100,
  boxSizing: 'border-box',
  padding: '0.75rem 1rem !important'
}));

export const Toolbar = glamorous(MuiToolbar)({
  minHeight: 'auto !important'
});
