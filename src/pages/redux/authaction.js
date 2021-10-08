export function user_Login(mobile_number, password, resolve) {
  const res = {
    mobile_number,
    password
  }
  return (dispatch) => {
        dispatch({ type: 'AUTH_LOGIN', data:res });
        resolve();
  };
}

export function user_Signup(mobile_number, name, password, resolve) {
  const res = {
    mobile_number,
    name,
    password
  }
  return (dispatch) => {
        dispatch({ type: 'AUTH_LOGIN', data:res  });
        resolve();
  };
}

export function user_logout(cb) {
  return (dispatch) => {
    dispatch({ type: 'AUTH_LOGOUT' });
    cb();
  };
}
