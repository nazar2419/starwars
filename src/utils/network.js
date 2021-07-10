import {HTTP, HTTPS} from '@constants/api';

/**
 * Сhange with HTPP on HTTPS
 * @param {String} url - url for change
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = url => {
  return url ? url.replace(HTTP, HTTPS) : url
}

 /**
  * Send query Fetch
  * @param {String} url -url for change 
  * @returns {Promise} - Promise with query result
  */
export const  getApiResource = async (url) => {
  try {
    const res = await fetch(url);
    if(!res.ok) {
      console.error('Could not get api', res.status);
    }
    return res.json();
  } catch (error) {
    console.error('Could not get api', error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(url.map(res=> {
    return fetch(res).then(res => res.json());
  }))
  return res; 
}
