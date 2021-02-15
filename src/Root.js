import { Box } from '@material-ui/core';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { DRAWER_WIDTH } from './config';
import HooksFlowDemo from './examples/example_hooksFlow/example';
import UseToggleDemo from './exercises/exercise_useToggle/exercise';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <Box>
      <Sidebar />
      <QueryClientProvider client={queryClient}>
        <Box marginLeft={DRAWER_WIDTH / 8} padding={3}>
          <Router>
            <Route path='/use-toggle' component={UseToggleDemo} />
            <Route path='/hooks-flow' component={HooksFlowDemo} />
          </Router>
        </Box>
      </QueryClientProvider>
    </Box>
  );
}
