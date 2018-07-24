import React from 'react';
import { animated } from 'react-spring';

import { fullPageClass } from '../App.style.js';
import { displayName } from '../utils/helpers';

export default WrappedComponent => {
  class WithTransitionDiv extends React.Component {
    render() {
      const { style, ...props } = this.props;

      return (
        <animated.div className={fullPageClass} style={style}>
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
