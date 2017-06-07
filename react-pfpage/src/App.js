import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import interactionApp from './reducers/interactionApp';
import './App.css';
import Root from './Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let store = createStore(interactionApp);

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
