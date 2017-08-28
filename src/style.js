import glamorous from 'glamorous';

export const Container = glamorous.div({});

export const FooterNav = glamorous.div({}, ({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%'
}));
