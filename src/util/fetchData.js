import {FAILED, FINISH, START} from '../store/constants';

const url = 'https://jsonplaceholder.typicode.com';

const fetchData = async ({path, method = 'GET', params}) => {
  const paramString = params
    ? '?' +
      Object.entries(params)
        .map(([name, value]) => `${name}=${value}`)
        .join('&')
    : '';
  const input = url + path + paramString;
  const response = await fetch(input, {method});
  if (response.status === 200) {
    const json = await response.json();
    return {status: true, json};
  } else {
    console.error(`Error while receiving response for request: ${input}`);
    return {status: false};
  }
};

export const fetchDataActionFactory =
  (actionName, fetchParams) => async (dispatch, params) => {
    dispatch({
      type: actionName + START,
      params,
    });
    const {status, json} = await fetchData({...fetchParams, params});
    if (status) {
      dispatch({
        type: actionName + FINISH,
        payload: json,
        params: {...fetchParams, ...params},
      });
    } else {
      dispatch({
        type: actionName + FAILED,
        params,
      });
    }
  };
