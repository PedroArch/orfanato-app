import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanageMap from './pages/Orphanage-map';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanageMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
