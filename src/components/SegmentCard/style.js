import glamorous from 'glamorous';

export const Container = glamorous.div({
  maxWidth: 550,
  flex: 1,
  display: 'flex'
});

export const Button = glamorous.button({
  width: '100%',
  backgroundColor: 'transparent',
  textAlign: 'left',
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
});

export const Card = glamorous.div({
  flex: 1,
  padding: '1rem 0.75rem'
});

export const CardIcon = glamorous.div({
  display: 'inline-block',
  verticalAlign: 'middle',
  paddingRight: '0.25rem'
});

export const CardText = glamorous.div({});

export const DialogContainer = glamorous.div({
  padding: '1rem'
});
