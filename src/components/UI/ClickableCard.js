import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

import { Container, Base } from './ClickableCard.style';

class ClickableCard extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { onClick, children } = this.props;

    return (
      <Container>
        <Card>
          <Base onClick={onClick}>{children}</Base>
        </Card>
      </Container>
    );
  }
}

export default ClickableCard;
