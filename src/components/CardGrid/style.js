import glamorous from 'glamorous';

export const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
});

export const CardWrapper = glamorous.div({
  display: 'flex',
  flex: 1,
  minWidth: 260,
  margin: 10
});
