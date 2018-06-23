import React from "react";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { PersistGate } from "redux-persist/integration/react";

/////
import FormContainer from "./Containers/FormContainer";
import TableContainer from "./Containers/TableContainer";
import "./App.css";
import Header from "./Components/Header";
import { store, persistor } from "./store";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className={classes.root}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                  <FormContainer />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TableContainer />
                </Grid>
              </Grid>
            </div>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
