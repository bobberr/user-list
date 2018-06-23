import React from "react";
import AddUserForm from "../Components/AddUserForm";
import { connect } from "react-redux";
import { addUser } from "../Redux/action-creators";
import { reset } from "redux-form";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  header: {
    textAlign: "center"
  }
};

class FormContainer extends React.Component {
  submitHandler = user => {
    this.props.addUser(user);
    this.props.dispatch(reset("addUser"));
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h3 className={classes.header}>Add user</h3>
        <AddUserForm onSubmit={this.submitHandler} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ addUser }, dispatch), dispatch };
};

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(FormContainer)
);
