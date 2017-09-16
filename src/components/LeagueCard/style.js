import glamorous from 'glamorous';

export const Card = glamorous.div({
  maxWidth: 400,
  minWidth: 250,
  margin: '0.5rem',
  flex: '1 1 0',
  display: 'flex',
  flexDirection: 'column'
});

export const FlagContainer = glamorous.div({
  width: '100%',
  paddingBottom: '50%',
  position: 'relative'
});

export const FlagImage = glamorous.img({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
});

export const Content = glamorous.div(({ theme }) => ({
  flex: '1',
  padding: theme.spacing.unit * 2,
  '&:last-child': {
    paddingBottom: theme.spacing.unit * 3
  }
}));
