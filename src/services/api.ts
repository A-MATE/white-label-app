import {API_URL, CLIENT_ID} from '@env';
import axios from 'axios';
import StorageManager from './StorageManager';

const getHeaders = async (
  contentType: string,
  requiresAuth: boolean = true,
) => {
  const headers: any = {
    Accept: '*/*',
    'Content-Type': contentType,
    'x-origin': 'mobile_app',
    'x-client-id': CLIENT_ID,
  };

  if (requiresAuth) {
    const token = await StorageManager.checkToken();
    if (token) {
      headers.Authorization = token;
    }
  }

  return headers;
};

const handleRequest = async (
  endpoint: string,
  method: string,
  data?: any,
  contentType = 'application/json',
  requiresAuth: boolean = true,
) => {
  const headers = await getHeaders(contentType, requiresAuth);
  const apiUrl = `${API_URL}${endpoint}`;
  try {
    const response = await axios({
      url: apiUrl,
      method,
      data,
      headers,
    });
    return response;
  } catch (error) {
    throw new Error(error?.message || 'Request failed');
  }
};

export {handleRequest};
