import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {user_Signup} from './redux/authaction';
import { isName, isPass, isNum } from './redux/help';
import { NotificationManager } from "react-notifications";

const Create = (props) => {
    const dispatch = useDispatch();
    const [mobile_number, setMnumber] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const submit = (e) => {
        e.preventDefault();
        if (isNum(mobile_number) && isPass(password) && isName(name)) {
            dispatch(
                user_Signup(
                  mobile_number,
                  name,
                  password,
                  () => {
                    props.history.replace("/home");
                  }
              )
            );
        
        } else {
            NotificationManager.error("Data Invalid");
        }
    }

    return (
        <>
            <div className="no-bottom no-top" id="content">
           <section className="full-height relative no-top no-bottom vertical-center" data-bgimage="url(images/background/subheader.jpg) top" data-stellar-background-ratio=".5">
                <div className="overlay-gradient t50">
					<div className="center-y relative">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5 text-dark fadeInRight" data-wow-delay=".5s">
                                <div className="spacer-10"></div>
                                <h1>Create or login Account</h1>
                                </div>
								
								<div className="col-lg-4 offset-lg-2 fadeIn" data-wow-delay=".5s">
									<div className="box-rounded padding40" data-bgcolor="#ffffff">
										<h3 className="mb10">Sign Up</h3>
										<p>Login using an existing account or create a new account <Link to="/login">here<span></span></Link>.</p>
										<form name="contactForm" id='contact_form' className="form-border" onSubmit={submit}>

                                            <div className="field-set">
                                                <input type='text' name='number' id='number' className="form-control" placeholder="mobile_number" onChange={(e) => {setMnumber(e.target.value)}} />
                                            </div>

                                            <div className="field-set">
                                                <input type='text' name='name' id='name' className="form-control" placeholder="username" onChange={(e) => {setName(e.target.value)}}/>
                                            </div>
											
											 <div className="field-set">
                                                <input type='password' name='password' id='password' className="form-control" placeholder="Abc@12345" onChange={(e) => {setPassword(e.target.value)}}/>
                                            </div>
											
											<div className="field-set">
												<input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2" />
											</div>
                                </form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>		
            
            </div>  
        </>
    )
}

export default Create
