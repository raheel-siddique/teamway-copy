import React from "react";
import { FaFileAlt, FaPaperclip } from "react-icons/fa";
import { Select, DatePicker, Switch } from "antd";
import moment from "moment";

import FormInput from "../../../components/FormInput/FormInput";
import useTask from "../../../hooks/useTask";

import { TaskFormStyle, CreateTaskStyle } from "./CreateTask.style";

const TaskForm = () => {
  const { Option } = Select;
  const {
    taskName,
    description,
    handleSubmit,
    setDescription,
    setTaskName,
    handleAssigned,
    handleStartDate,
    handleEndDate,
    setOffset,
  } = useTask();

  return (
    <TaskFormStyle onSubmit={handleSubmit}>
      <FormInput
        title="Task Name"
        type="text"
        placeholder="Task Name"
        name="task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <FormInput title="Assign To" className="assign-to-dropdown">
        <Select defaultValue="Assign To" onChange={handleAssigned}>
          <Option value="1">Admin</Option>
          <Option value="2">Customer</Option>
          <Option value="3">Manager</Option>
        </Select>
      </FormInput>

      <FormInput title="Descritpion" className="description">
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Description.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </FormInput>

      <FormInput title="Date Started" className="calender-wrapper">
        <DatePicker onChange={handleStartDate} />
      </FormInput>

      <FormInput title="Date End" className="calender-wrapper">
        <DatePicker onChange={handleEndDate} />
      </FormInput>

      {/* <FormInput title="Attachement Permission " className="attachment-wrapper">
        <label htmlFor="attachment" className="attachment">
          <input type="file" name="" id="attachment" />

          <article className="attachemnt-details">
            <p className="guide-text">Attach your document</p>
            <span className="icon">
              <FaPaperclip />
            </span>
          </article>
        </label>
      </FormInput> */}

      <FormInput title="Enable Offsite" className="calender-wrapper">
        <Switch size="small" onChange={setOffset} />
      </FormInput>

      <article className="form-buttons-wrapper">
        <button className="form-button">Cancel</button>
        <button className="form-button" type="submit">
          Submit
        </button>
      </article>
    </TaskFormStyle>
  );
};

function CreateTask() {
  return (
    <CreateTaskStyle>
      <article className="form-title">
        <span className="icon">
          <FaFileAlt />
        </span>
        <h2 className="title">Create Task</h2>
      </article>

      <TaskForm />
    </CreateTaskStyle>
  );
}

export default CreateTask;
