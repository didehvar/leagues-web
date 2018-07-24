import React from 'react';
import Switch from 'react-router-dom/Switch';
import { Transition, animated } from 'react-spring';

import config from '../../utils/config';

class AnimatedSwitch extends React.Component {
  render() {
    const { children, location, ...transitionProps } = this.props;

    console.log(location);

    return (
      <div className={config.css.fullPage}>
        <Transition
          native
          config={config.slow}
          keys={location.pathname}
          {...transitionProps}
        >
          {style => (
            <Switch location={location}>
              {React.Children.map(children, child => {
                const { component: Component, ...childProps } = child.props;

                return React.createElement(child.type, {
                  ...childProps,
                  render: props => (
                    <animated.div style={style} className={config.css.fullPage}>
                      <Component {...props} />
                    </animated.div>
                  ),
                });
              })}
            </Switch>
          )}
        </Transition>
      </div>
    );
  }
}

export default AnimatedSwitch;
