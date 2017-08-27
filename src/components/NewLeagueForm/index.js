import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import isValid from 'date-fns/is_valid';
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
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

const NewLeagueForm = ({
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
            name="type"
            value={values.type}
            onChange={handleChange}
            style={{ flexDirection: 'row' }}
          >
            <FormControlLabel value="run" control={<Radio />} label="Run" />
            <FormControlLabel value="ride" control={<Radio />} label="Ride" />
          </RadioGroup>

          {errors.type &&
            touched.type &&
            <FormHelperText error>
              {errors.type}
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

NewLeagueForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string
    ]),
    type: PropTypes.string
  })
};

export default Formik({
  mapPropsToValues: () => ({
    name: '',
    startDate: new Date(),
    type: 'run'
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    startDate: Yup.date().required(),
    type: Yup.string().required()
  }),
  handleSubmit: (values, { props, setErrors, setSubmitting }) => {
    // do stuff with your payload
    // e.preventDefault(), setSubmitting, setError(undefined) are
    // called before handleSubmit is. So you don't have to do repeat this.
    // handleSubmit will only be executed if form values pass validation (if you specify it).
    // CallMyApi(props.user.id, values).then(
    //   res => {
    //     setSubmitting(false);
    //     // do something to show success
    //     // MyToaster.showSuccess({ message: 'Success!' })
    //   },
    //   err => {
    //     setSubmitting(false);
    //     setErrors(transformMyAPIErrorToAnObject(err));
    //     // do something to show a rejected api submission
    //     // MyToaster.showError({ message: 'Shit!', error: err })
    //   }
    // );
    setSubmitting(false);
  }
})(NewLeagueForm);
