import {fetchDataActionFactory} from '../../util/fetchData';
import {DELETE_POST, GET_POSTS} from '../constants';

const fetchPosts = fetchDataActionFactory(GET_POSTS, {path: '/posts'});
export const getPosts = (_start, _limit) => dispatch =>
  fetchPosts(dispatch, {_start, _limit});

export const deletePost = postId =>
  fetchDataActionFactory(DELETE_POST, {path: `/posts/${postId}`, postId});
