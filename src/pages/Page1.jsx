import React from 'react';

import { useDispatch } from "react-redux";
import {user_logout} from './redux/authaction';
const Page1 = (props) => {
    
    const dispatch = useDispatch();
    return (
        <>
            <h1>Hello World</h1>
            
            <button type="button" className="btn btn-info color-3" style={{margin:"10px"}} onClick={(e) => {props.history.push("/home");}}>Home</button>
            <button type="button" className="btn btn-danger color-3" onClick={(e) => {dispatch(user_logout(() => document.location.reload()));}}>Logout</button>
        </>
    )
}

export default Page1
