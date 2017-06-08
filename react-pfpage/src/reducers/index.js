import { TOGGLE_DRAWER } from '../actions/index';


const initialState = {
  stateDrawer: false
};

const toggleDrawer = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        stateDrawer: action.open
      });
    default:
      return state;
  }
}

export default toggleDrawer;
