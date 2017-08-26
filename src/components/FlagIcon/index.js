import React from 'react';
import PropTypes from 'prop-types';
import { Img } from 'glamorous';

import { getFlag } from '../../utils/flags';

const FlagIcon = ({ countryCode }) => {
  return <Img width="100%" src={getFlag(countryCode)} alt="" />;
};

FlagIcon.propTypes = {
  countryCode: PropTypes.string.isRequired
};

export default FlagIcon;
