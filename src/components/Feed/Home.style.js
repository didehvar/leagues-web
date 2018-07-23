import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: ${props => props.theme.spacing.page};
`;

export const HeroImage = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: brightness(90%);

  &,
  > div {
    width: 100%;
    height: 100%;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
`;

export const Text = styled(Typography)`
  color: ${props => props.theme.palette.grey[50]};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;
