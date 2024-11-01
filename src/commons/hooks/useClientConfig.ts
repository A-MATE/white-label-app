import {CLIENT_NAME} from '@env';
import {useEffect, useState} from 'react';
import {getClientConfig} from '../../../clients';

export const useClientConfig = () => {
  const [clientConfig, setClientConfig] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('===============CLIENT:  =====================');
    console.log(CLIENT_NAME);
    console.log('====================================');
    const config = getClientConfig(CLIENT_NAME);
    if (config) {
      setClientConfig(config);
    } else {
      setError(`No config found for client: ${CLIENT_NAME}`);
    }
    setLoading(false);
  }, []);

  return {clientConfig, error, loading};
};
