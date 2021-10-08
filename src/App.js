import React from 'react';
import Routes from './pages/routes/router';
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App(props) {
  return (
    <>
    <Routes {...props} />
    <NotificationContainer />
    </>
  );
}

export default App;
