import {API_URL, CLIENT_ID, CLIENT_NAME, ENVIRONMENT} from '@env';
import {useEffect, useState} from 'react';
import {EnvVars} from '../types/envVars.enum';

const useEnvCheck = () => {
  const [isEnvReady, setIsEnvReady] = useState(false);
  const [missingVars, setMissingVars] = useState<string[]>([]);

  useEffect(() => {
    const requiredEnvVars = {
      [EnvVars.API_URL]: API_URL,
      [EnvVars.CLIENT_NAME]: CLIENT_NAME,
      [EnvVars.CLIENT_ID]: CLIENT_ID,
      [EnvVars.ENVIRONMENT]: ENVIRONMENT,
    };

    const missing = Object.keys(requiredEnvVars).filter(
      key => !requiredEnvVars[key as EnvVars],
    );

    if (missing.length === 0) {
      setIsEnvReady(true);
    } else {
      console.error('Missing environment variables:', missing);
      setMissingVars(missing);
    }
  }, []);

  return {isEnvReady, missingVars};
};

export default useEnvCheck;
