import glamorous from 'glamorous';

export const Container = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
});

export const BodyWrapper = glamorous.div({
  padding: `${20 / 16}rem`,
  height: '100%',
  display: 'flex'
});

export const FooterFix = glamorous.div({
  height: 60
});

export const FooterNav = glamorous.div({}, ({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%'
}));
