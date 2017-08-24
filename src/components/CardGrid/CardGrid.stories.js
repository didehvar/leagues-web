import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Decorators from '../../../storybook/decorators';

import LeagueCard from '../LeagueCard';
import SegmentCard from '../SegmentCard';

import leagueCardFaker from '../LeagueCard/LeagueCard.faker';
import segmentCardFaker from '../SegmentCard/SegmentCard.faker';

import CardGrid from './index';

const leagueCards = [...Array(3)].map(leagueCardFaker);
const segmentCards = [...Array(3)].map(segmentCardFaker);

storiesOf('CardGrid', module)
  .addDecorator(Decorators.router())
  .add('leagues', () => <CardGrid cards={leagueCards} component={LeagueCard} />)
  .add('segments', () =>
    <CardGrid cards={segmentCards} component={SegmentCard} />
  );
