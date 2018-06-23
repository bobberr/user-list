import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  header: {
    textAlign: "center"
  }
};

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <h3 className={classes.header}>User list test task</h3>
    </div>
  );
};

export default withStyles(styles)(Header);
