import client0Config from './client0/config/config.json';
import clientTestConfig from './clientTest/config/config.json';

const clientConfigs: Record<string, any> = {
  client0: client0Config,
  clientTest: clientTestConfig,
};

export const getClientConfig = (clientName: string) => {
  console.log('clientConfigs', clientConfigs);

  return clientConfigs[clientName] || null;
};
