import React from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  formControl: {
    marginTop: "30px"
  },
  submitButton: {
    alignSelf: "flex-start",
    marginTop: "30px"
  },
  input: {
    marginBottom: "5px"
  }
});

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={touched && error ? error : label}
    {...input}
    {...custom}
    error={touched && error ? true : false}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const AddUserForm = props => {
  const { handleSubmit, error, submitFailed, classes } = props;
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Field
        name="firstName"
        component={renderTextField}
        label="Enter your first name"
        type="text"
        className={classes.input}
      />
      <Field
        name="lastName"
        component={renderTextField}
        label="Enter your last name"
        type="text"
        className={classes.input}
      />
      <Field
        name="phone"
        component={renderTextField}
        label="Enter your phone number"
        type="text"
        className={classes.input}
      />
      <FormControl
        className={classes.formControl}
        error={error && submitFailed ? true : false}
      >
        <FormLabel component="legend">Gender</FormLabel>
        <Field name="gender" component={renderRadioGroup} type="text">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </Field>
        {error && submitFailed ? (
          <FormHelperText>Gender is required</FormHelperText>
        ) : null}
      </FormControl>
      <Field
        name="age"
        component={renderTextField}
        label="Enter your age"
        type="number"
        className={classes.input}
      />
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

AddUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (!/^[a-zA-Zа-яА-Я-`]+$/.test(values.firstName)) {
    errors.firstName = "Enter correct first name";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (!/^[a-zA-Zа-яА-Я-`]+$/.test(values.lastName)) {
    errors.lastName = "Enter correct last name";
  }
  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!/^[0-9+-]+$/.test(values.phone)) {
    errors.phone = "Enter correct phone";
  }
  if (!values.gender) {
    errors._error = "Select Gender";
  }
  if (values.age < 1 || values.age > 120) {
    errors.age = "Enter correct age";
  } else if (!values.age) {
    errors.age = "Age is required";
  }
  return errors;
};

export default withStyles(styles)(
  reduxForm({ form: "addUser", validate })(AddUserForm)
);
