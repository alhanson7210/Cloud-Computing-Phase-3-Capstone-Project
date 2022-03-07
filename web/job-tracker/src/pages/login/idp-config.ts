const { REACT_APP_IDP_API_KEY, REACT_APP_IDP_AUTH_DOMAIN } = process.env;

const config = {
  apiKey: `${ REACT_APP_IDP_API_KEY }`,
  authDomain: `${ REACT_APP_IDP_AUTH_DOMAIN }`
};

export default config;