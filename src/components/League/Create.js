import React from 'react';
import { Formik, Field } from 'formik';
import { object, string, date } from 'yup';
import format from 'date-fns/format';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import config from '../../utils/config';
import { FormikTextField, FormikRadioGroup } from '../UI/FormikControl';

import { Form } from './Create.style';

class Create extends React.PureComponent {
  render() {
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
        onSubmit={(values, actions) => {
          console.log('submit', values, actions);
        }}
        render={({ errors, touched, isSubmitting }) => (
          <Form>
            <Field
              required
              name="name"
              label="Name"
              component={FormikTextField}
              fullWidth
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

export default Create;
