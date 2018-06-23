import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { removeUser } from "../Redux/action-creators";
import UsersTable from "../Components/UsersTable";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  header: {
    textAlign: "center"
  },
  input: {
    marginBottom: "20px"
  }
};

class TableContainer extends React.Component {
  state = { filter: "" };
  filterHandler = e => {
    this.setState({ filter: e.target.value });
  };
  removeUserHandler = user => {
    this.props.removeUser(user);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h3 className={classes.header}>User list</h3>
        <TextField
          label="Filter by any spec"
          name="filter"
          onChange={this.filterHandler}
          className={classes.input}
        />
        <UsersTable
          deleteHandler={this.removeUserHandler}
          users={this.props.users}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { removeUser }
  )(TableContainer)
);
