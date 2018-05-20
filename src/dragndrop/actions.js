import { createAction } from 'redux-actions';
import ga from '../helpers/ga';

export const actions = {
  DRAG_START: ga('DRAG_START'),
  DRAG_END: ga('DRAG_END'),
};

export default {
  dragStart: createAction(actions.DRAG_START),
  dragEnd: createAction(actions.DRAG_END, pos => pos),
};
