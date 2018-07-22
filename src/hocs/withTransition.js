import React from 'react';
import { animated } from 'react-spring';

import { transitionClass } from '../App.style.js';
import { displayName } from '../utils/helpers';

export default WrappedComponent => {
  class WithTransition extends React.Component {
    render() {
      const { style, ...props } = this.props;

      return (
        <animated.div className={transitionClass} style={style}>
          <WrappedComponent {...props} />
        </animated.div>
      );
    }
  }

  WithTransition.displayName = `WithTransition(${displayName(
    WrappedComponent,
  )})`;
  return WithTransition;
};
