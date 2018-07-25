import styled from 'styled-components';

const Spacer = styled.div`
  padding: ${props => (props.small ? 4 : props.theme.spacing.gap)}px 0;
`;

export default Spacer;
