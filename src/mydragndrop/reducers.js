import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { actions } from './actions';

const {
  DRAG_END,
  DRAG_START,
} = actions;

export default handleActions(
  {
    [DRAG_START](state, { payload }) {
      return state.set('dragType', payload);
    },
    [DRAG_END](state, { payload }) {
      return state.set('card', Immutable.fromJS({ left: payload.x, top: payload.y }));
    },
  },
  Immutable.fromJS({
    dragType: null,
  }),
);
