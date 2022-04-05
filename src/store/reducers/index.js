import {combineReducers} from 'redux';

import posts from './posts';
import comments from './comments';

const reducer = combineReducers({
  posts,
  comments,
});
export default reducer;
