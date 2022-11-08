import React from "react";
import { MdAutoGraph, MdOutlineImage } from "react-icons/md";
import { Select, DatePicker, TimePicker } from "antd";

import FormInput from "../../../components/FormInput/FormInput";

import { ProjectFormStyle, CreateProjectStyle } from "./CreateProject.style";
import FileUploader from "../../../components/FileUploader/FileUploader";

const ProjectForm = () => {
  const { Option } = Select;

  return (
    <ProjectFormStyle>
      <FormInput title="Project Name" type="text" placeholder="Project Name" />
      <FormInput title="Team" className="content-input">
        <Select defaultValue="Teams">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>

          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </FormInput>
      <FormInput title="Description" className="form-description">
        <textarea
          cols="30"
          rows="8"
          placeholder="Description"
          className="custom-description"
        ></textarea>
      </FormInput>
      <FormInput title="Start Date" className="form-date">
        <DatePicker />
      </FormInput>
      <FormInput title="End Date" className="form-date">
        <DatePicker />
      </FormInput>

      <FileUploader
        title="Attach Picture"
        guideText="Attach Your Image here..."
        icon={<MdOutlineImage />}
      />

      <FormInput title="Work Week" className="form-date">
        <TimePicker use12Hours />
      </FormInput>

      <article className="buttons-wrapper">
        <button>Cancel</button>
        <button>Submit</button>
      </article>
    </ProjectFormStyle>
  );
};

function CreateProject() {
  return (
    <CreateProjectStyle>
      <article className="form-header">
        <span className="icon">
          <MdAutoGraph />
        </span>
        <h3 className="title">Create Project</h3>
      </article>

      <ProjectForm />
    </CreateProjectStyle>
  );
}

export default CreateProject;
