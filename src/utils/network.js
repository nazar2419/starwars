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

// ( async() =>{
//   const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//   console.log(body);
// })();
