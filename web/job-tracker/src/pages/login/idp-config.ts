const { IDP_API_KEY, IDP_AUTH_DOMAIN } = process.env;

const config = {
  apiKey: `${ IDP_API_KEY }`,
  authDomain: `${ IDP_AUTH_DOMAIN }`
};

export default config;