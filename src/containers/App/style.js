import glamorous from 'glamorous';

export const Container = glamorous.div({
  padding: '1rem 1.25rem',
  margin: '0 auto',
  maxWidth: 768,
});

export const FooterNav = glamorous.div({}, ({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
}));
