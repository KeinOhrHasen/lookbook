import { ENVIRONMENT } from '../configs/environment';

export const loadSessions = async () => {
  try {
    const response = await fetch(`${ENVIRONMENT.apiURL}/sessions`, {
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
    throw new Error(error.response.data.message || 'An error occurred during sessions list load');
  }
};

export const updateStatus = async ({ id, status }) => {
  try {
    const response = await fetch(`${ENVIRONMENT.apiURL}/sessions/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
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
    throw new Error(error.response.data.message || 'An error occurred during session status change');
  }
};
