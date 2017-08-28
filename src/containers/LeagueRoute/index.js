import React, { Component } from 'react';
import faker from 'faker';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import SegmentCard from '../../components/SegmentCard';

import LeagueStandings from '../LeagueStandings';

import * as Style from './style';

const segments = Array(5).fill().map(() => ({
  id: faker.random.number(),
  name: faker.random.words(5),
  startDate: faker.date.past(),
  endDate: faker.date.future()
}));

class LeagueRoute extends Component {
  state = { value: 0 };

  handleChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Style.Container>
        <AppBar>
          <Style.Toolbar>
            <Typography type="title" color="inherit" align="center" noWrap>
              {faker.random.words()}
            </Typography>
          </Style.Toolbar>
          <Tabs
            value={value}
            onChange={(e, v) => this.handleChange(v)}
            centered
            fullWidth
          >
            <Tab label="Segments" />
            <Tab label="Standings" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
          onChangeIndex={i => this.handleChange(i)}
          animateHeight
        >
          <div>
            {segments.map(segment =>
              <SegmentCard key={segment.id} {...segment}>
                <LeagueStandings />
              </SegmentCard>
            )}
          </div>
          <LeagueStandings />
        </SwipeableViews>
      </Style.Container>
    );
  }
}

export default LeagueRoute;
