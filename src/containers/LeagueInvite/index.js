import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon
} from 'react-share';

import Routes from '../../utils/routes';

import * as LeagueActions from '../../actions/leagues';

import { getLeagueInvite, getCurrentLeague } from '../../reducers';

import * as Style from './style';

class LeagueInvite extends Component {
  state = { loading: true };

  constructor(props) {
    super(props);
    this.shareField = null;
  }

  getInvite = () => {
    const { league, getInvite } = this.props;
    if (league) getInvite(league.id);
  };

  componentDidMount() {
    this.getInvite();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.league && this.props.league) this.getInvite();
  }

  copyShareUrl = () => {
    this.shareField.select();
    document.execCommand('copy');
  };

  render() {
    const { league, invite } = this.props;

    if (!league || !invite) return <div />;

    const url = `${window.location.origin}${Routes.leagueUseInvite(
      league.id,
      league.slug,
      invite.code
    )}`;

    return (
      <div>
        <div>
          <Typography variant="headline" gutterBottom>
            Share this league with your friends
          </Typography>

          <Style.Icons>
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={url}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton url={url}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <RedditShareButton url={url}>
              <RedditIcon size={32} round />
            </RedditShareButton>

            <EmailShareButton url={url}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </Style.Icons>
        </div>

        <div>
          <Typography gutterBottom>Or send them the following link:</Typography>

          <TextField
            fullWidth
            value={url}
            onClick={event => event.target.select()}
            inputRef={field => (this.shareField = field)}
          />

          <p>
            {document.queryCommandSupported('copy') && (
              <Button color="primary" onClick={this.copyShareUrl}>
                Copy link
              </Button>
            )}
          </p>
        </div>
      </div>
    );
  }
}

LeagueInvite.propTypes = {
  league: PropTypes.object
};

LeagueInvite.defaultProps = {
  league: null
};

export default connect(
  state => ({
    invite: getLeagueInvite(state),
    league: getCurrentLeague(state)
  }),
  LeagueActions
)(LeagueInvite);
