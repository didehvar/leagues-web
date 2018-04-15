import glamorous from 'glamorous';
import { CardActions } from 'material-ui/Card';

export const Card = glamorous.div({
  maxWidth: 400,
  minWidth: 250,
  margin: '0.5rem',
  flex: '1 1 0',
  display: 'flex',
  flexDirection: 'column',

  '> button': {
    display: 'block',
    textAlign: 'initial',
    backgroundColor: '#fff'
  }
});

export const Content = glamorous.div(({ theme }) => ({
  padding: theme.spacing.unit * 2
}));

export const Icon = glamorous.span({
  verticalAlign: 'middle',
  paddingRight: '0.5rem'
});

export const Heading = glamorous.h3({
  overflow: 'hidden',
  height: 31
});

export const Actions = glamorous(CardActions)({
  justifyContent: 'flex-end'
});
