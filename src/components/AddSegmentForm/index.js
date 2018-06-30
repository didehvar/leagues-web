import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import addWeeks from 'date-fns/add_weeks';
import { withFormik } from 'formik';
import Yup from 'yup';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import startOfDay from 'date-fns/start_of_day';

import AppBar from '../AppBar';
import SegmentSelector from '../../containers/SegmentSelector';

import * as Style from './style';

class AddSegmentForm extends Component {
  state = { segment: null };

  onSelectSegment = segment => {
    this.setState({ segment });
    this.props.setFieldValue('segmentId', segment.id);
  };

  render() {
    const { segment } = this.state;
    const {
      distance,
      open,
      onOpen,
      onClose,
      values,
      touched,
      errors,
      isValid,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      children
    } = this.props;

    return (
      <div>
        {(children && children(onOpen)) || (
          <IconButton onClick={onOpen} color="inherit">
            <AddIcon />
          </IconButton>
        )}

        <Dialog open={open} onClose={onClose} fullScreen>
          <form onSubmit={handleSubmit}>
            <AppBar
              color="default"
              position="static"
              title={`Add ${distance ? 'round' : 'segment'}`}
              left={
                <IconButton onClick={onClose} aria-label="Back">
                  <CloseIcon />
                </IconButton>
              }
              right={
                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  disabled={
                    (!distance && !values.segmentId && !isValid) || isSubmitting
                  }
                >
                  Add
                </Button>
              }
            />
            <Style.Dialog>
              <Grid container justify="center" spacing={16}>
                <Grid item xs={12}>
                  {errors.segmentId &&
                    touched.segmentId && (
                      <FormHelperText error>{errors.segmentId}</FormHelperText>
                    )}
                </Grid>

                {distance && (
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
                      touched.name && (
                        <FormHelperText error>{errors.name}</FormHelperText>
                      )}
                  </Grid>
                )}

                <Grid item xs={12}>
                  <TextField
                    id="startDate"
                    type="date"
                    label="Start date"
                    value={format(values.startDate, 'YYYY-MM-DD')}
                    onChange={event =>
                      event.target.value && handleChange(event)
                    }
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
                  <TextField
                    id="endDate"
                    type="date"
                    label="End date"
                    value={format(values.endDate, 'YYYY-MM-DD')}
                    onChange={event =>
                      event.target.value && handleChange(event)
                    }
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

                {!distance && (
                  <Grid item xs={12}>
                    <SegmentSelector
                      color="secondary"
                      disabled={isSubmitting}
                      onSelect={this.onSelectSegment}
                    />
                  </Grid>
                )}

                {segment && (
                  <Grid item xs={12}>
                    <TextField
                      id="segmentName"
                      type="text"
                      label="Selected segment"
                      value={segment.name}
                      disabled
                      fullWidth
                    />
                  </Grid>
                )}
              </Grid>
            </Style.Dialog>
          </form>
        </Dialog>
      </div>
    );
  }
}

AddSegmentForm.propTypes = {
  distance: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  values: PropTypes.shape({
    startDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string
    ]),
    endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
  })
};

AddSegmentForm.defaultProps = {
  distance: false
};

export default withFormik({
  mapPropsToValues: ({ startDate }) => {
    const date = startOfDay(startDate || new Date());
    return {
      startDate: date,
      endDate: addWeeks(date, 2),
      segmentId: undefined,
      name: undefined
    };
  },
  validationSchema: Yup.object().shape({
    startDate: Yup.date().required(),
    endDate: Yup.date().required(),
    segmentId: Yup.number(),
    name: Yup.string()
  }),
  handleSubmit: async (
    values,
    { props: { onSubmit, onClose }, setErrors, setSubmitting }
  ) => {
    try {
      await onSubmit(values);
    } catch (ex) {
      setErrors(ex);
    } finally {
      setSubmitting(false);
      onClose();
    }
  }
})(AddSegmentForm);
