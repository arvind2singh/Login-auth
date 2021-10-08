import React from "react";
import { useDispatch } from "react-redux";
import { user_logout } from "./redux/authaction";
const Home = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="btn btn-info btn-fullwidth color-3 mt-4"
        onClick={(e) => {
          props.history.push("/page1");
        }}
      >
        page1
      </button>
      <button
        type="button"
        className="btn btn-fullwidth btn-primary mt-4"
        onClick={(e) => {
          props.history.push("/page2");
        }}
      >
        page2
      </button>
      <button
        type="button"
        className="btn btn-danger btn-fullwidth color-3 mt-4"
        onClick={(e) => {
          dispatch(user_logout(() => props.history.push("/login")));
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
