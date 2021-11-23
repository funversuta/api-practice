// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('tokenData') || null;
  }
  export const getToken1 = () => {
    return sessionStorage.getItem('AccessTokenData') || null;
  }
  export const getOrderData = () => {
    return sessionStorage.getItem('OrderData') || null;
  }

  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token: string, user: any) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }