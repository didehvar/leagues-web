import React from 'react';

import { transitionClass } from '../App.style.js';
import { displayName } from '../utils/helpers';

export default WrappedComponent => {
  class WithTransition extends React.PureComponent {
    render() {
      const { style, ...props } = this.props;

      return (
        <div className={transitionClass} style={style}>
          <WrappedComponent {...props} />
        </div>
      );
    }
  }

  WithTransition.displayName = `WithTransition(${displayName(
    WrappedComponent
  )})`;
  return WithTransition;
};
