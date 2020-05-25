/* eslint-disable camelcase */
const admin = require('firebase-admin');
const functions = require('firebase-functions');

const envValues = require('dotenv').config();

const {
  TYPE, PROJECT_ID, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENT_EMAIL,
  CLIENT_ID, AUTH_URI, TOKEN_URI, AUTH_PRIVIDER_CERT_URL,
  CLIENT_CERT_URL,
} = (envValues && envValues.parsed) || {};

const {
  type, project_id, private_key_id, private_key, client_email,
  client_id, auth_uri, token_uri, auth_provider_cert_url,
  client_cert_url,
} = functions.config().app || {};

const serviceAccount = {
  type: TYPE || type,
  project_id: PROJECT_ID || project_id,
  private_key_id: PRIVATE_KEY_ID || private_key_id,
  private_key: (PRIVATE_KEY || private_key || '').replace(/\\n/g, '\n'),
  client_email: CLIENT_EMAIL || client_email,
  client_id: CLIENT_ID || client_id,
  auth_uri: AUTH_URI || auth_uri,
  token_uri: TOKEN_URI || token_uri,
  auth_provider_x509_cert_url: AUTH_PRIVIDER_CERT_URL || auth_provider_cert_url,
  client_x509_cert_url: CLIENT_CERT_URL || client_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
  projectId: project_id,
});

module.exports = admin;
