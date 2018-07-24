import React from 'react';
import { animated } from 'react-spring';

import config from '../utils/config';
import { displayName } from '../utils/helpers';

export default WrappedComponent => {
  class WithTransitionDiv extends React.Component {
    render() {
      const { style, ...props } = this.props;

      return (
        <animated.div className={config.css.fullPage} style={style}>
          <WrappedComponent {...props} />
        </animated.div>
      );
    }
  }

  WithTransitionDiv.displayName = `WithTransitionDiv(${displayName(
    WrappedComponent,
  )})`;
  return WithTransitionDiv;
};
