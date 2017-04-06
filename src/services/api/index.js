import { schema, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';
import config from 'config';

// Extracts the next page URL from Github API response.
function getNextPageUrl(response) {
  const link = response.headers.get('link');
  if (!link) {
    return null;
  }

  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1);
  if (!nextLink) {
    return null;
  }

  return nextLink.split(';')[0].slice(1, -1);
}

const PROXY_ROOT = '/api';

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, entitySchema) {
  let fullUrl = (endpoint.indexOf(PROXY_ROOT) === -1) ? `${PROXY_ROOT}/${endpoint}` : endpoint;

  // If request comes from server side, call API url directly.
  if (__SERVER__) {
    fullUrl = (endpoint.indexOf(config.apiBaseUrl) === -1)
                  ? `${config.apiBaseUrl}/${endpoint}` : endpoint;
  }

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    )
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);
      const nextPageUrl = getNextPageUrl(response);

      return Object.assign(
        {},
        normalize(camelizedJson, entitySchema),
        { nextPageUrl }
      );
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened.' })
    );
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/paularmstrong/normalizr

// Schemas for Github API responses.
const userSchema = new schema.Entity('users', {}, {
  idAttribute: 'login'
});

const repoSchema = new schema.Entity('repos', {
  owner: userSchema
}, {
  idAttribute: 'fullName'
});

const userSchemaArray = new schema.Array(userSchema);
const repoSchemaArray = new schema.Array(repoSchema);

// api services
export const fetchUser = login => callApi(`users/${login}`, userSchema);
export const fetchRepo = fullName => callApi(`repos/${fullName}`, repoSchema);
export const fetchStarred = url => callApi(url, repoSchemaArray);
export const fetchStargazers = url => callApi(url, userSchemaArray);
