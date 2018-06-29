import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { withFormik } from 'formik';
import Yup from 'yup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import addWeeks from 'date-fns/add_weeks';
import endOfDay from 'date-fns/end_of_day';

const CreateLeagueForm = ({
  values,
  touched,
  errors,
  dirty,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset
}) => (
  <form onSubmit={handleSubmit}>
    <Grid container justify="center" spacing={16}>
      <Grid item xs={12}>
        <TextField
          id="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          fullWidth
        />
        {errors &&
          errors.name &&
          touched.name && <FormHelperText error>{errors.name}</FormHelperText>}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="startDate"
          type="date"
          label="Start date"
          value={format(values.startDate, 'YYYY-MM-DD')}
          onChange={event => {
            return event.target.value && handleChange(event);
          }}
          onBlur={handleBlur}
          inputProps={{ required: true }}
          required
          fullWidth
        />
        {errors &&
          errors.startDate &&
          touched.startDate && (
            <FormHelperText error>{errors.startDate}</FormHelperText>
          )}
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset" required>
          <FormLabel component="legend">Discipline</FormLabel>
          <RadioGroup
            name="discipline"
            value={values.discipline}
            onChange={handleChange}
            style={{ flexDirection: 'row' }}
          >
            <FormControlLabel value="run" control={<Radio />} label="Run" />
            <FormControlLabel value="ride" control={<Radio />} label="Ride" />
          </RadioGroup>

          {errors &&
            errors.discipline &&
            touched.discipline && (
              <FormHelperText error>{errors.discipline}</FormHelperText>
            )}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset" required>
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup
            name="type"
            value={values.type}
            onChange={handleChange}
            style={{ flexDirection: 'row' }}
          >
            <FormControlLabel
              value="fastest"
              control={<Radio />}
              label="Fastest"
            />
            <FormControlLabel
              value="distance"
              control={<Radio />}
              label="Distance"
            />
          </RadioGroup>

          {errors &&
            errors.type &&
            touched.type && (
              <FormHelperText error>{errors.type}</FormHelperText>
            )}
        </FormControl>
        {values.type === 'distance' && (
          <Grid item xs={12}>
            <TextField
              id="endDate"
              type="date"
              label="End date"
              value={format(values.endDate, 'YYYY-MM-DD')}
              onChange={event => {
                return event.target.value && handleChange(event);
              }}
              onBlur={handleBlur}
              inputProps={{ required: true }}
              required
              fullWidth
            />
            {errors &&
              errors.endDate &&
              touched.endDate && (
                <FormHelperText error>{errors.endDate}</FormHelperText>
              )}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="raised"
          type="submit"
          color="primary"
          disabled={isSubmitting}
        >
          Create league
        </Button>
      </Grid>
    </Grid>
  </form>
);

CreateLeagueForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string
    ]),
    discipline: PropTypes.string,
    type: PropTypes.string
  })
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    startDate: endOfDay(new Date()),
    discipline: 'run',
    type: 'fastest',
    endDate: addWeeks(endOfDay(new Date()), 2)
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    startDate: Yup.date().required(),
    discipline: Yup.string().required(),
    type: Yup.string().required(),
    endDate: Yup.date()
  }),
  handleSubmit: async (
    values,
    { props: { onSubmit }, setErrors, setSubmitting }
  ) => {
    try {
      await onSubmit(values);
    } catch (ex) {
      setErrors(ex.message);
    } finally {
      setSubmitting(false);
    }
  }
})(CreateLeagueForm);
