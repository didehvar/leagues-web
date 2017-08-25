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
      <div>
        <AppBar position="static">
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
          >
            {tabs.map(({ label, component: Tag }) =>
              <Style.TabWrapper key={label}>
                <Tag />
              </Style.TabWrapper>
            )}
          </SwipeableViews>
        </Style.ViewContainer>
      </div>
    );
  }
}

export default LeagueNavTabs;

LeagueNavTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired
    })
  ).isRequired
};
