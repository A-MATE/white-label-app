import {API_URL, CLIENT_ID} from '@env';
import axios from 'axios';
import StorageManager from './storageManager';

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

const baseRequest = async (
  endpoint: string,
  method: string,
  data?: any,
  contentType = 'application/json',
  requiresAuth: boolean = false,
) => {
  const headers = await getHeaders(contentType, requiresAuth);

  const apiUrl = `${API_URL}${endpoint}`;
  console.log('API URL:', apiUrl);

  try {
    const response = await axios({
      url: apiUrl,
      method,
      data,
      headers,
    });
    console.log('Response from baseURl', response);

    return response;
  } catch (error: any) {
    console.log('====================================');
    console.log('Error message:', error.message);
    if (error.response) {
      console.log('Error response status:', error.response.status);
      console.log('Error response data:', error.response.data);
      console.log('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.log('Error request:', error.request);
    } else {
      console.log('Error details:', error.config);
    }
    console.log('====================================');
    throw new Error(error.message || 'Request failed');
  }
};

export {baseRequest};
