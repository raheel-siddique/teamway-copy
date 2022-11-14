import React from "react";
import { NavLink } from "react-router-dom";


const Footer_login_form=()=>{
    return(
        <>
         <div className="footer_box">
            <p className="text_footer">dont have an account?</p>
            <NavLink to='/register' >
            <p className="text_footer_account" style={{cursor:"pointer"}}>Create Account</p>

            </NavLink>
          </div>

        </>
    )
}
export default Footer_login_form