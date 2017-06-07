const initialState = {
  stateDrawer: false,
};

const toggleDrawer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        stateDrawer: action.open
      });
    dafault:
      return state;
  } 
}
