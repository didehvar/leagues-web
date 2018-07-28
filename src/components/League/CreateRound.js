import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { object, string, date, number } from 'yup';
import format from 'date-fns/format';
import addWeeks from 'date-fns/add_weeks';
import addDays from 'date-fns/add_days';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

import routes from '../../utils/routes';
import {
  createRound,
  isCreatingRound,
  getCreatedRound,
  getRoundError,
} from '../../ducks/leagues/rounds';
import { fetchStarredSegments } from '../../ducks/leagues/segments';
import { FormikTextField } from '../UI/FormikControl';
import Spacer from '../UI/Spacer';
import StravaLink from '../UI/StravaLink';
import ModalContent from '../UI/ModalContent';
import StarredSegments from './StarredSegments';

import { Form } from './Create.style';

class CreateRoundForm extends React.PureComponent {
  state = {
    starredOpen: false,
    segmentName: '',
  };

  toggleStarred = event => {
    event.stopPropagation();
    this.setState(prevState => ({ starredOpen: !prevState.starredOpen }));
  };

  selectSegmentId = (segmentId, segmentName) => {
    this.setState({ segmentName, starredOpen: false });
    this.props.setFieldValue('segmentId', segmentId);
  };

  render() {
    const { starredOpen, segmentName } = this.state;
    const { isSubmitting, errorMessage, isValid } = this.props;

    return (
      <Form>
        <Field
          required
          name="name"
          label="Round Name"
          component={FormikTextField}
          fullWidth
          autoFocus
        />

        <Field
          required
          name="startDate"
          label="Start Date"
          type="date"
          component={FormikTextField}
          fullWidth
        />

        <Field
          required
          name="endDate"
          label="End Date"
          type="date"
          component={FormikTextField}
          fullWidth
        />

        <Spacer padding={8} />

        <Typography paragraph>
          Select a Strava segment from your starred segments. If you need to
          star some segments, head{' '}
          <StravaLink href="https://www.strava.com/segments/search">
            over to Strava
          </StravaLink>{' '}
          .
        </Typography>

        <Button
          type="button"
          variant="outlined"
          color={segmentName ? 'default' : 'secondary'}
          onClick={this.toggleStarred}
        >
          {segmentName ? 'Change' : 'Select'} Strava Segment
        </Button>

        <Spacer padding={8} />

        <TextField
          required
          name="segmentName"
          label="Selected Segment"
          value={segmentName}
          disabled
          fullWidth
        />

        <Spacer padding={8} />

        {errorMessage && (
          <Typography color="error" paragraph>
            {errorMessage}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          disabled={!isValid || isSubmitting}
        >
          Create Round
        </Button>

        <TextField
          required
          name="segmentId"
          label="Segment"
          disabled
          style={{ display: 'none' }}
        />

        <Modal open={starredOpen} onClose={this.toggleStarred}>
          <ModalContent>
            <StarredSegments onSelect={this.selectSegmentId} />
          </ModalContent>
        </Modal>
      </Form>
    );
  }
}

class CreateRound extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStarredSegments();
  }

  componentDidUpdate(prevProps) {
    const { leagueId, roundId, history } = this.props;

    if (!prevProps.roundId && roundId) {
      history.push(routes.round.pathWith(leagueId, roundId));
    }
  }

  render() {
    const { onSubmit, isSubmitting, errorMessage, leagueId } = this.props;

    return (
      <Formik
        initialValues={{
          name: '',
          startDate: format(new Date(), 'YYYY-MM-DD'),
          endDate: format(addWeeks(new Date(), 1), 'YYYY-MM-DD'),
          segmentId: '',
        }}
        validationSchema={object().shape({
          name: string().required(),
          startDate: date()
            .min(format(new Date(), 'YYYY-MM-DD'))
            .required(),
          endDate: date()
            .min(format(addDays(new Date(), 1), 'YYYY-MM-DD'))
            .required(),
          segmentId: number().required(),
        })}
        onSubmit={onSubmit}
        render={props => (
          <CreateRoundForm
            {...props}
            leagueId={leagueId}
            isSubmitting={isSubmitting}
            errorMessage={errorMessage}
          />
        )}
      />
    );
  }
}

export default connect(
  state => ({
    isSubmitting: isCreatingRound(state),
    roundId: getCreatedRound(state).id,
    leagueId: getCreatedRound(state).leagueId,
    errorMessage: getRoundError(state),
  }),
  (dispatch, ownProps) => ({
    onSubmit: values =>
      dispatch(
        createRound({
          ...values,
          leagueId: parseInt(ownProps.match.params.id, 10),
        }),
      ),
    fetchStarredSegments: () => dispatch(fetchStarredSegments()),
  }),
)(CreateRound);
