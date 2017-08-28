import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import * as Style from './style';

class LeagueNavTabs extends Component {
  state = { value: 0 };

  handleChange = value => this.setState({ value });

  render() {
    const { value } = this.state;
    const { tabs } = this.props;

    return (
      <Style.Container>
        <AppBar position="fixed">
          <Tabs
            value={value}
            onChange={(e, v) => this.handleChange(v)}
            centered
            fullWidth
          >
            {tabs.map(({ label }) => <Tab key={label} label={label} />)}
          </Tabs>
        </AppBar>
        <Style.ViewContainer>
          <SwipeableViews
            index={value}
            onChangeIndex={i => this.handleChange(i)}
            animateHeight
          >
            {tabs.map(({ label, children }) =>
              <Style.TabWrapper key={label}>
                {children}
              </Style.TabWrapper>
            )}
          </SwipeableViews>
        </Style.ViewContainer>
      </Style.Container>
    );
  }
}

export default LeagueNavTabs;

LeagueNavTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      children: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired
    })
  ).isRequired
};
