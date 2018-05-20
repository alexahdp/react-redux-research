import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { actions } from './actions';

const {
  DRAG_END,
} = actions;

export default handleActions(
  {
    [DRAG_END](state, { payload }) {
      return state.set('card', Immutable.fromJS({ left: payload.x, top: payload.y }));
    },
  },
  Immutable.fromJS({
    dragged: 0,
    card: {
      left: 10,
      top: 50,
    },
  }),
);
