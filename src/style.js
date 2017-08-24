import glamorous from 'glamorous';

export const Container = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
});

export const NavWrapper = glamorous.div({}, ({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey['50']}`,
  position: 'fixed',
  bottom: 0,
  width: '100%'
}));

export const BodyWrapper = glamorous.div({
  padding: `${20 / 16}rem`,
  height: '100%',
  display: 'flex'
});
