import glamorous from 'glamorous';

const sideWidth = 20;

export const Toolbar = glamorous.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 48
});

export const Side = glamorous.div({
  maxWidth: `${sideWidth}%`,
  flexBasis: `${sideWidth}%`,
  textAlign: 'center'
});

export const Center = glamorous.div({
  maxWidth: `${100 - sideWidth * 2}%`,
  flexBasis: `${100 - sideWidth * 2}%`
});
