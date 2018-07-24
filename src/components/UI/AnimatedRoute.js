import React from 'react';
import { animated } from 'react-spring';
import Route from 'react-router-dom/Route';
import config from '../../utils/config';

class AnimatedRoute extends React.PureComponent {
  render() {
    const { style, ...props } = this.props;

    return (
      <animated.div style={style} className={config.css.fullPage}>
        <Route {...props} />
      </animated.div>
    );
  }
}

export default AnimatedRoute;
