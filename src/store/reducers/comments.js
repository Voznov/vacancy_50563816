import {DELETE_POST, FAILED, FINISH, GET_COMMENTS, START} from '../constants';

const initialState = {
  commentsById: {},
  loading: false,
};

export default (state = initialState, {type, payload, params}) => {
  switch (type) {
    case GET_COMMENTS + START:
      return {...state, loading: true};

    case GET_COMMENTS + FINISH:
      return {
        ...state,
        loading: false,
        commentsById: {...state.commentsById, [params.postId]: payload},
      };
    case DELETE_POST + FINISH:
      return {
        ...state,
        commentsById: {...state.commentsById, [params.postId]: undefined},
      };

    case GET_COMMENTS + FAILED:
      return {...state, loading: false};
    default:
      return state;
  }
};
