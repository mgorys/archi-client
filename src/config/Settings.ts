import localConfig from './local';

// const environment = process.env.REACT_APP_ENVIRONMENT || 'local';

const getEnvConfig = () => {
  return localConfig;
};

const settings = {
  ...getEnvConfig(),
};

export default settings;
