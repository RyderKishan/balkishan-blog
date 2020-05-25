import * as R from 'ramda';
import fetch from 'node-fetch';

const CustomException = async (error) => {
  const data = await error.json();
  return {
    data,
    error: true,
    status: R.pathOr(500, ['status'], error),
    url: R.pathOr('', ['url'], error),
    statusText: R.pathOr('', ['statusText'], error),
  };
};

const get = async (endpoint, headers, options = {}) => {
  const commonHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  const commonOptions = {
    method: 'GET',
    ...options,
  };
  const response = await fetch(endpoint,
    {
      ...commonOptions,
      headers: { ...commonHeaders, ...headers },
    });
  return response.ok ? response.json() : CustomException(response);
};

export {
  get,
  CustomException,
};
