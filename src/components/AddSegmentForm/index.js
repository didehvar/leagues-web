import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import addWeeks from 'date-fns/add_weeks';
import { Formik } from 'formik';
import Yup from 'yup';
import { FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import CreateIcon from 'material-ui-icons/Create';
import Dialog from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import CloseIcon from 'material-ui-icons/Close';

import AppBar from '../AppBar';
import SegmentSelector from '../SegmentSelector';

import * as Style from './style';

class AddSegmentForm extends Component {
  onSelectSegment = segmentId =>
    this.props.setFieldValue('segmentId', segmentId);

  render() {
    const {
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
      handleSubmit
    } = this.props;

    return (
      <IconButton onClick={onOpen} color="inherit">
        <CreateIcon />

        <Dialog
          open={open}
          onRequestClose={onClose}
          transition={<Slide direction="up" />}
          fullScreen
        >
          <form onSubmit={handleSubmit}>
            <AppBar
              color="default"
              position="static"
              title="Add segment"
              left={
                <IconButton onClick={onClose} aria-label="Back">
                  <CloseIcon />
                </IconButton>
              }
              right={
                <Button
                  dense
                  type="submit"
                  color="primary"
                  disabled={(!values.segmentId && !isValid) || isSubmitting}
                >
                  Add
                </Button>
              }
            />
            <Style.Dialog>
              <Grid container justify="center">
                <Grid item xs={12}>
                  {errors.segmentId &&
                    touched.segmentId &&
                    <FormHelperText error>
                      {errors.segmentId}
                    </FormHelperText>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="startDate"
                    type="date"
                    label="Start date"
                    value={format(values.startDate, 'YYYY-MM-DD')}
                    onChange={event =>
                      event.target.value && handleChange(event)}
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
                  <TextField
                    id="endDate"
                    type="date"
                    label="End date"
                    value={format(values.endDate, 'YYYY-MM-DD')}
                    onChange={event =>
                      event.target.value && handleChange(event)}
                    onBlur={handleBlur}
                    inputProps={{ required: true }}
                    required
                    fullWidth
                  />
                  {errors.endDate &&
                    touched.endDate &&
                    <FormHelperText error>
                      {errors.endDate}
                    </FormHelperText>}
                </Grid>
                <Grid item xs={12}>
                  <SegmentSelector
                    disabled={isSubmitting}
                    onSelect={this.onSelectSegment}
                  />
                </Grid>
                <Grid item xs={12}>
                  <SegmentSelector
                    starred
                    color="accent"
                    disabled={isSubmitting}
                    onSelect={this.onSelectSegment}
                  />
                </Grid>
              </Grid>
            </Style.Dialog>
          </form>
        </Dialog>
      </IconButton>
    );
  }
}

AddSegmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    startDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string
    ]),
    endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
  })
};

export default Formik({
  mapPropsToValues: () => ({
    startDate: new Date(),
    endDate: addWeeks(new Date(), 1),
    segmentId: undefined
  }),
  validationSchema: Yup.object().shape({
    startDate: Yup.date().required(),
    endDate: Yup.date().required(),
    segmentId: Yup.number().required()
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
