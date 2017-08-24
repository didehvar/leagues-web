import glamorous from 'glamorous';

export const Container = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
});

export const CardWrapper = glamorous.div({
  flex: '0 1 10%',
  minWidth: 230,
  maxWidth: 550,
  margin: 10
});
