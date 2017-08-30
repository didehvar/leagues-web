import React, { Component } from 'react';
import faker from 'faker/locale/en_GB';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';

import api from '../../utils/api';

import AppBar from '../../components/AppBar';
import SegmentCard from '../../components/SegmentCard';

import LeagueStandings from '../LeagueStandings';
import AddSegmentDialog from '../AddSegmentDialog';
import JoinLeagueButton from '../JoinLeagueButton';

import * as Style from './style';

const segments = Array(5).fill().map(() => ({
  id: faker.random.number(),
  name: faker.random.words(5),
  startDate: faker.date.past(),
  endDate: faker.date.future()
}));

class LeagueRoute extends Component {
  state = { value: 0, league: {} };

  handleChange = value => this.setState({ value });

  onCreate = () => {};

  async componentDidMount() {
    const { match: { params: { id, slug } } } = this.props;
    const response = await api(`leagues/${id}${slug && `/${slug}`}`);

    if (response.status >= 400) {
      this.setState({ error: true });
      return;
    }

    const { data: league } = await response.json();
    this.setState({ league });
  }

  render() {
    const { value, league: { name } } = this.state;

    return (
      <Style.Container>
        <AppBar
          color="default"
          title={name}
          left={<AddSegmentDialog />}
          right={<JoinLeagueButton />}
        >
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
