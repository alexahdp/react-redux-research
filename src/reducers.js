import { reducer as formReducer } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';

import libraryReducer from './library/reducers';

export default combineReducers({
  app: state => state || { name: 'Alex' },
  form: formReducer,
  library: libraryReducer,
});

