let session = localStorage.getItem("login-session");

const initialState = {
  user: {
    mobile_number: "",
    name: "",
    passward:""
  },
  isLoggedIn: session ? true : false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      localStorage.setItem("login-session", action.data.mobile_number);
      return {
        ...state,
        user: { ...action.data },
        isLoggedIn: true,
      };
    case "AUTH_LOGOUT":
      localStorage.removeItem("login-session");
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}
