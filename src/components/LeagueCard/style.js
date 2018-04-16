import glamorous from 'glamorous';
import { CardActions } from 'material-ui/Card';
import MuiButton from 'material-ui/Button';

export const Card = glamorous.div(({ theme }) => ({
  maxWidth: 400,
  minWidth: 250,
  margin: '0.5rem',
  flex: '1 1 0',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.75rem',

  '> button': {
    display: 'block',
    textAlign: 'initial',
    backgroundColor: '#fff'
  }
}));

export const FlagImage = glamorous.img({
  width: 'auto',
  maxHeight: 22,
  verticalAlign: 'middle'
});

export const Icon = glamorous.span({});

export const Heading = glamorous.h3({
  maxHeight: 24,
  overflow: 'hidden'
});

export const Actions = glamorous(CardActions)({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden'
});

export const Button = glamorous(MuiButton)({
  marginLeft: 'auto !important'
});
