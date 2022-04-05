import {DELETE_POST, FAILED, FINISH, GET_POSTS, START} from '../constants';

const initialState = {
  posts: [],
  loading: false,
};

export default (state = initialState, {type, payload, params}) => {
  switch (type) {
    case GET_POSTS + START:
    case DELETE_POST + START:
      return {...state, loading: true};

    case GET_POSTS + FINISH:
      return {
        ...state,
        loading: false,
        posts: state.posts.concat(
          payload.map(post => ({
            ...post,
            time: new Date(Math.ceil(Math.random() * 10000000000000)),
          })),
        ),
      };
    case DELETE_POST + FINISH:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.id !== params.postId),
      };

    case GET_POSTS + FAILED:
    case DELETE_POST + FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
