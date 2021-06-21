export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);
  if(!res.ok) {
    console.error('Could not get api', res.status);
  }
  return res.json();
  } catch (error) {
    console.error('Could not get api', error.message);
    return false
  }
}

// ( async() =>{
//   const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//   console.log(body);
// })();
