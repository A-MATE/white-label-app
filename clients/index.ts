import client0Config from './client0/config/config.json';
import defaultConfig from './default/config/config.json';

const clientConfigs: Record<string, any> = {
  default: defaultConfig,
  client0: client0Config,
};

export const getClientConfig = (clientName: string) => {
  console.log('clientConfigs', clientConfigs);

  return clientConfigs[clientName] || null;
};
