import React from "react";

import { useDispatch } from "react-redux";
import { user_logout } from "./redux/authaction";

const Page2 = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Goodbye World</h1>

      <button
        type="button"
        className="btn btn-info color-3"
        style={{ margin: "10px" }}
        onClick={(e) => {
          props.history.push("/home");
        }}
      >
        Home
      </button>
      <button
        type="button"
        className="btn btn-danger color-3"
        onClick={(e) => {
          dispatch(user_logout(() => props.history.push("/login")));
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Page2;
