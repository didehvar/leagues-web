import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { object, string, date } from 'yup';
import format from 'date-fns/format';
import addWeeks from 'date-fns/add_weeks';
import addDays from 'date-fns/add_days';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import routes from '../../utils/routes';
import {
  createRound,
  isCreatingRound,
  getCreatedRound,
} from '../../ducks/leagues/rounds';
import { FormikTextField } from '../UI/FormikControl';
import Spacer from '../UI/Spacer';
import StravaLink from '../UI/StravaLink';

import { Form } from './Create.style';

class CreateRound extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const { leagueId, roundId, history } = this.props;

    if (!prevProps.roundId && roundId) {
      history.push(routes.round.pathWith(leagueId, roundId));
    }
  }

  render() {
    const { onSubmit, isSubmitting } = this.props;

    return (
      <Formik
        initialValues={{
          name: '',
          startDate: format(new Date(), 'YYYY-MM-DD'),
          endDate: format(addWeeks(new Date(), 1), 'YYYY-MM-DD'),
        }}
        validationSchema={object().shape({
          name: string().required(),
          startDate: date()
            .min(format(new Date(), 'YYYY-MM-DD'))
            .required(),
          endDate: date()
            .min(format(addDays(new Date(), 1), 'YYYY-MM-DD'))
            .required(),
        })}
        onSubmit={onSubmit}
        render={({ isValid }) => (
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

            <Button variant="outlined" color="secondary">
              Select Strava Segment
            </Button>

            <Spacer padding={8} />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={!isValid || isSubmitting}
            >
              Create Round
            </Button>
          </Form>
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
  }),
  dispatch => ({
    onSubmit: values => dispatch(createRound(values)),
  }),
)(CreateRound);
