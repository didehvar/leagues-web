import glamorous from 'glamorous';

export const Container = glamorous.div({
  height: 56,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});

export const Title = glamorous.div({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});
