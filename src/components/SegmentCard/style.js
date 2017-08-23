import glamorous from 'glamorous';

export const Container = glamorous.div({
  maxWidth: 550
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
