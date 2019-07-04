import React from 'react';
import { Provider } from 'react-redux';
import Reports from './containers/Reports';

function App({ store }) {
  return (
    <Provider store={store}>
      <div style={{ marginTop: 100 }}>
        <Reports />
      </div>
    </Provider>
  );
}

export default App;
