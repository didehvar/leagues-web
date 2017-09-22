import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Formik } from 'formik';
import Yup from 'yup';
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

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
}) =>
  <form onSubmit={handleSubmit}>
    <Grid container justify="center">
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
        {errors.name &&
          touched.name &&
          <FormHelperText error>
            {errors.name}
          </FormHelperText>}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="startDate"
          type="date"
          label="Start date"
          value={format(values.startDate, 'YYYY-MM-DD')}
          onChange={event => {
            console.log(event.target.value, typeof event.target.value);
            return event.target.value && handleChange(event);
          }}
          onBlur={handleBlur}
          inputProps={{ required: true }}
          required
          fullWidth
        />
        {errors.startDate &&
          touched.startDate &&
          <FormHelperText error>
            {errors.startDate}
          </FormHelperText>}
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

          {errors.discipline &&
            touched.discipline &&
            <FormHelperText error>
              {errors.discipline}
            </FormHelperText>}
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button raised type="submit" color="primary" disabled={isSubmitting}>
          Create league
        </Button>
      </Grid>
    </Grid>
  </form>;

CreateLeagueForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string
    ]),
    discipline: PropTypes.string
  })
};

export default Formik({
  mapPropsToValues: () => ({
    name: '',
    startDate: new Date(),
    discipline: 'run'
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    startDate: Yup.date().required(),
    discipline: Yup.string().required()
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