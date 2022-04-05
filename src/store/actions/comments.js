import {fetchDataActionFactory} from '../../util/fetchData';
import {GET_COMMENTS} from '../constants';

const fetchComments = fetchDataActionFactory(GET_COMMENTS, {path: '/comments'});
export const getComments = postId => dispatch =>
  fetchComments(dispatch, {postId});
