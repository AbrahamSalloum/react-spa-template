const serverUrl = process.env.REACT_APP_SERVER_URL;

export const setMessage = (message) => {
  return {
    type: "SET_MESSAGE",
    payload: message
  }
}

export const callOpenApi = (token) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`)
      const responseData = await response.json();
      dispatch(setMessage(responseData.message));
    }
    catch (error) {
      dispatch(setMessage(error.message));
    }
  }
}


export const callSecureApi =  (token = "") => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/protected-message`,
      {
        headers: {
          Authorisation: `Bearer ${token}`,
        }
      })
      const responseData = await response.json();
      dispatch(setMessage(responseData.message));
    } catch (error) {
      dispatch(setMessage(error.message));
    }
  }
}