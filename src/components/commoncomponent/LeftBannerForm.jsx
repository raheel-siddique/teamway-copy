import React from "react";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
  } from "@ant-design/icons";
import { Col } from "antd";



const LeftBannerForm=()=>{
    return(
        <>
        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12} className="left_column">
            <div className="main_heading_banner">
              <h1 className="heading_banner">Teamway Productivity</h1>
            </div>

            <div className="sec_heading_banner">
              <h2 className="sec_heading">
                Let us organize your work so you can concentrate on whats
                important
              </h2>
            </div>
            <div className="description_banner">
              <p className="para_description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                optio eos sapiente architecto error cum eligendi, similique,
                Omnis optio eos sapiente architecto error cum eligendi,
                similique
              </p>
            </div>
            <div className="icons_banner">
              <InstagramOutlined className="intsgram_icon" />
              <TwitterOutlined className="intsgram_icon" />
              <FacebookOutlined className="intsgram_icon" />
            </div>
            <div className="link_banner">
              <a className="link_webiste" href="/">
                www.shoponline.com
              </a>
            </div>
          </Col>
        </>
    )
}
export default LeftBannerForm