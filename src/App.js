import React from 'react';
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <div>
      <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid items xs={12} md={4}>
          <List />
        </Grid>
        <Grid items xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      <h1>Hello, World</h1>
      </>
    </div>
  );
};

export default App;
