import React from "react";
import { FaUserFriends, FaImage, FaCompass } from "react-icons/fa";
import { MdGpsFixed, MdWifiTethering } from "react-icons/md";
import { Select } from "antd";

import FormInput from "../../../components/FormInput/FormInput";

import { TeamsFormStyle, CreateTeamsStyle } from "./CreateTeams.style";

const TeamsForm = () => {
  const { Option } = Select;
  return (
    <TeamsFormStyle>
      <FormInput title=" Team Name" type="text" placeholder="Team Name" />
      <FormInput title="Project" className="project-dropdown">
        <Select defaultValue="Projects">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </FormInput>

      <FormInput title="Attach Picture" className="image-uplaod-wrapper">
        <label htmlFor="imageUpload" className="image-uploader">
          <input type="file" name="" id="imageUpload" />
          <span className="icon">
            <FaImage />
          </span>
        </label>
      </FormInput>

      <FormInput title="Attendance mechanism" className="options-container">
        <ul className="options-wrapper">
          <li className="options">
            <a href="#" className="options-item">
              <span className="option-icon">
                <MdGpsFixed />
              </span>

              <p className="option-text">GPS</p>
            </a>
          </li>

          <li className="options">
            <a href="#" className="options-item">
              <span className="option-icon">
                <MdWifiTethering />
              </span>

              <p className="option-text">Wifi</p>
            </a>
          </li>

          <li className="options">
            <a href="#" className="options-item">
              <span className="option-icon">
                <FaCompass />
              </span>

              <p className="option-text">Manual</p>
            </a>
          </li>
        </ul>
      </FormInput>

      <article className="buttons-wrapper">
        <button>Cancel</button>
        <button>Submit</button>
      </article>
    </TeamsFormStyle>
  );
};

function CreateTeams() {
  return (
    <CreateTeamsStyle>
      <article className="section-header">
        <span className="icon">
          <FaUserFriends />
        </span>

        <h3 className="title">Create Team</h3>
      </article>

      <TeamsForm />
    </CreateTeamsStyle>
  );
}

export default CreateTeams;
