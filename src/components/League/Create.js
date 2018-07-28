import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { object, string, date } from 'yup';
import format from 'date-fns/format';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import config from '../../utils/config';
import routes from '../../utils/routes';
import {
  createLeague,
  isCreating,
  getCreatedLeague,
} from '../../ducks/leagues';
import { FormikTextField, FormikRadioGroup } from '../UI/FormikControl';

import { Form } from './Create.style';

class Create extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const { leagueId, history } = this.props;

    if (!prevProps.leagueId && leagueId) {
      history.push(routes.league.pathWith(leagueId));
    }
  }

  render() {
    const { onSubmit, isSubmitting } = this.props;

    return (
      <Formik
        initialValues={{
          name: '',
          startDate: format(new Date(), 'YYYY-MM-DD'),
          discipline: config.leagues.cycling,
          type: config.leagues.fastest,
          visibility: 'public',
        }}
        validationSchema={object().shape({
          name: string().required(),
          startDate: date()
            .min(format(new Date(), 'YYYY-MM-DD'))
            .required(),
          discipline: string()
            .matches(
              new RegExp(
                `(${config.leagues.cycling}|${config.leagues.running})`,
              ),
            )
            .required(),
          type: string()
            .matches(
              new RegExp(
                `(${config.leagues.fastest}|${config.leagues.distance})`,
              ),
            )
            .required(),
          visibility: string()
            .matches(/(public|private)/)
            .required(),
        })}
        onSubmit={onSubmit}
        render={({ errors, touched }) => (
          <Form>
            <Field
              required
              name="name"
              label="Name"
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
              name="discipline"
              label="Discipline"
              component={FormikRadioGroup}
              fullWidth
            >
              <FormControlLabel
                value={config.leagues.cycling}
                label={config.leagues.cycling}
                control={<Radio />}
              />
              <FormControlLabel
                value={config.leagues.running}
                label={config.leagues.running}
                control={<Radio />}
              />
            </Field>

            <Field
              required
              name="type"
              label="Type"
              component={FormikRadioGroup}
              fullWidth
            >
              <FormControlLabel
                value={config.leagues.fastest}
                label={config.leagues.fastest}
                control={<Radio />}
              />
              <FormControlLabel
                value={config.leagues.distance}
                label={config.leagues.distance}
                control={<Radio />}
              />
            </Field>

            <Field
              required
              name="visibility"
              label="Visibility"
              component={FormikRadioGroup}
              fullWidth
            >
              <FormControlLabel
                value="public"
                label="Public"
                control={<Radio />}
              />
              <FormControlLabel
                value="private"
                label="Private"
                control={<Radio />}
              />
            </Field>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              disabled={isSubmitting}
            >
              Create
            </Button>
          </Form>
        )}
      />
    );
  }
}

export default connect(
  state => ({
    isSubmitting: isCreating(state),
    leagueId: getCreatedLeague(state).id,
  }),
  dispatch => ({
    onSubmit: values => dispatch(createLeague(values)),
  }),
)(Create);
