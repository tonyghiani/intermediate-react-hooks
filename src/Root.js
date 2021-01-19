import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UseToggleDemo from './exercise_useReducer/exercise'

export default function Root() {
  return <Router>
    <Route path="/use-toggle" component={UseToggleDemo} />
  </Router>
}
