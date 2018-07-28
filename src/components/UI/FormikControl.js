import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MuiRadioGroup from '@material-ui/core/RadioGroup';

export class FormikTextField extends React.Component {
  render() {
    const {
      field: { ...fields },
      form: { touched, errors },
      fullWidth,
      ...props
    } = this.props;

    return (
      <FormControl
        margin="normal"
        required={this.props.required}
        fullWidth={fullWidth}
      >
        <TextField
          {...props}
          {...fields}
          error={Boolean(touched[fields.name] && errors[fields.name])}
          helperText={touched[fields.name] && errors[fields.name]}
        />
      </FormControl>
    );
  }
}

export class FormikSelect extends React.Component {
  render() {
    const {
      field: { ...fields },
      form: { touched, errors },
      children,
      fullWidth,
      ...props
    } = this.props;

    return (
      <FormControl
        margin="normal"
        required={this.props.required}
        fullWidth={fullWidth}
      >
        <Select
          {...props}
          {...fields}
          error={Boolean(touched[fields.name] && errors[fields.name])}
        >
          {children}
        </Select>
      </FormControl>
    );
  }
}

const RadioGroup = styled(MuiRadioGroup)`
  margin: ${props => props.theme.spacing.unit}px 0;
`;

export class FormikRadioGroup extends React.Component {
  render() {
    const {
      field: { ...fields },
      form: { touched, errors },
      children,
      label,
      fullWidth,
      ...props
    } = this.props;

    const error = Boolean(touched[fields.name] && errors[fields.name]);

    return (
      <FormControl
        margin="dense"
        required={this.props.required}
        component="fieldset"
        error={error}
        fullWidth={fullWidth}
      >
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup {...props} {...fields}>
          {children}
        </RadioGroup>
        {error && <FormHelperText>{errors[fields.name]}</FormHelperText>}
      </FormControl>
    );
  }
}
