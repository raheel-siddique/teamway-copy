import React, { useContext, useState } from "react";
import { Menu, Table, Select, DatePicker } from "antd";

import DropDownButton from "../../../components/DropDownButton/DropDownButton";
import SearchBar from "../../../components/SearchBar/SearchBar";
import Popup from "../../../components/Popup/Popup";
import { DashboardContext } from "../../../context/dashboardContext";

import { TaskEditFormStyle, TaskListStyle } from "./TaskList.style";
import FormInput from "../../../components/FormInput/FormInput";

const TaskEditForm = () => {
  const { Option } = Select;
  return (
    <TaskEditFormStyle>
      <FormInput title="Task Name" placeholder="Task Name" />
      <FormInput title="Assigned To" className="assigned-to">
        <Select defaultValue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      </FormInput>
      <FormInput title="Description" className="description">
        <textarea
          placeholder="Description"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </FormInput>
      <FormInput title="Start Date" className="select-date">
        <DatePicker />
      </FormInput>
      <FormInput title="End Date" className="select-date">
        <DatePicker />
      </FormInput>

      <article className="buttons-wrapper">
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </article>
    </TaskEditFormStyle>
  );
};

function TaskList() {
  const { tableData } = useContext(DashboardContext);
  const [searchTableData, setSearchTableData] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date Started",
      dataIndex: "dateStarted",
      key: "dateStarted",
    },
    {
      title: "Date End",
      dataIndex: "dateEnd",
      key: "dateEnd",
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
    },
  ];

  const data = tableData.map((data, index) => {
    data["no"] = index + 1;
    data["taskName"] = data.task_name;
    data["assignedTo"] = data.assigned_to;
    data["dateStarted"] = data.start_date;
    data["dateEnd"] = data.end_date;
    data["mode"] = (
      <DropDownButton
        menu={
          <Menu>
            <Menu.Item key="0">
              <p onClick={() => setIsModalVisible(true)}>Edit</p>
            </Menu.Item>
            <Menu.Item key="2">
              <p>Delete</p>
            </Menu.Item>
            <Menu.Item key="3">
              <p>Archive</p>
            </Menu.Item>
          </Menu>
        }
      />
    );

    return data;
  });

  const onSearchTable = data.filter((item) =>
    Object.keys(item).some((key) =>
      String(item[key]).toLowerCase().includes(searchTableData.toLowerCase())
    )
  ); //to filter table

  return (
    <TaskListStyle>
      <h3 className="section-header">Task List</h3>

      <SearchBar
        value={searchTableData}
        onChange={(e) => setSearchTableData(e.target.value)}
      />

      <Popup
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        formTitle=" Edit Task"
        footer={null}
      >
        <TaskEditForm />
      </Popup>
      <Table columns={columns} dataSource={onSearchTable} />
    </TaskListStyle>
  );
}

export default TaskList;
