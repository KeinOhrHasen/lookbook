import { ENVIRONMENT } from '../configs/environment';

export const loadGrids = async () => {
  try {
    const response = await fetch(`${ENVIRONMENT.apiURL}/grids`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
    console.log('response', response);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred during grid list load');
  }
};
