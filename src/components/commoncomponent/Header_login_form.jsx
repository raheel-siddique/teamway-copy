import React from "react";




const Header_Login_Form=({heading, description})=>{
    return(
        <>
        <div className="main_div_form_heading">
            <h1 className="form_head">{heading}</h1>
          </div>

          <div className="main_div_form_para">
            <p className="form_para">
             {description}
            </p>
          </div>

        </>
    )
}
export  default Header_Login_Form