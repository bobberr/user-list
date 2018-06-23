import React from "react";
import PropTypes from "prop-types";
import { Table, Tr, Td, Thead, Th } from "reactable";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  hidden: {
    opacity: 0
  },
  headItem: {
    textAlign: "left",
    cursor: "pointer"
  }
};

const UsersTable = props => {
  const { filter, users, classes } = props;
  const createUserRow = (user, index) => {
    const { firstName, lastName, phone, gender, age } = user;
    return (
      <Tr key>
        <Td column="firstName" data={firstName} />
        <Td column="lastName" data={lastName} />
        <Td column="phone" data={phone} />
        <Td column="gender" data={gender} />
        <Td column="age" data={age} />
        <Td column="delete">
          <Button
            type="button"
            onClick={() => props.deleteHandler(index)}
            variant="contained"
            color="primary"
          >
            Delete
          </Button>
        </Td>
      </Tr>
    );
  };
  const usersToRender = users.map((user, i) => {
    return createUserRow(user, i);
  });
  return (
    <Table
      filterBy={filter}
      filterable={["firstName", "lastName", "phone", "gender", "age"]}
      sortable={["firstName", "lastName", "phone", "gender", "age"]}
      hideFilterInput
    >
      <Thead className={classes.headBlock}>
        <Th className={classes.headItem} column="firstName">
          First Name
        </Th>
        <Th className={classes.headItem} column="lastName">
          Last Name
        </Th>
        <Th className={classes.headItem} column="phone">
          Phone
        </Th>
        <Th className={classes.headItem} column="gender">
          Gender
        </Th>
        <Th className={classes.headItem} column="age">
          Age
        </Th>
        <Th column="delete" className={classes.hidden} />
      </Thead>
      {usersToRender}
    </Table>
  );
};

UsersTable.propTypes = {
  deleteHandler: PropTypes.func,
  users: PropTypes.array,
  filter: PropTypes.string
};

export default withStyles(styles)(UsersTable);
