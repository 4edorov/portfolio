import { TOGGLE_DRAWER, STATE_DRAWER } from '../actions/index';


const initialState = {
  openDrawer: false,
  dockedDrawer: true,
};

const toggleDrawer = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        openDrawer: action.open,
      });
    case STATE_DRAWER:
      return Object.assign({}, state, {
        dockedDrawer: action.docked,
      });
    default:
      return state;
  }
}

export default toggleDrawer;
