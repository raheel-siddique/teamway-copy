import React, { useContext, useState } from "react";
import { Menu, Table, TimePicker } from "antd";

import { DashboardContext } from "../../context/dashboardContext";
import Spinner from "../../components/Spinner/Spinner";

import {
  ChartsWrapperStyle,
  DashboardStyle,
  EditFormStyle,
  TaskTableStyle,
} from "./Dashbord.style";
import DropDownButton from "../../components/DropDownButton/DropDownButton";
import Popup from "../../components/Popup/Popup";
import FormInput from "../../components/Layout/FormInput/FormInput";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "../../components/Charts/BarChart";
import SearchBar from "../../components/SearchBar/SearchBar";

const EditForm = (props) => {
  const { setIsModalVisible } = props;
  return (
    <EditFormStyle>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormInput title="Project" type="text" placeholder="Project" />
        <FormInput title="Team" type="text" placeholder="Team" />
        <FormInput title="Task Name" type="text" placeholder="TaskName" />
        <article className="form-date-input">
          <FormInput title="Start Date" className="date-input">
            <TimePicker />
          </FormInput>
          <FormInput title="End Date" className="date-input">
            <TimePicker />
          </FormInput>
        </article>
        <FormInput title="Description" className="description">
          <textarea name="description" cols="30" rows="5"></textarea>
        </FormInput>

        <article className="buttons-wrapper">
          <button onClick={() => setIsModalVisible(false)}>Cancel</button>
          <button>Submit</button>
        </article>
      </form>
    </EditFormStyle>
  );
};

const TaskTable = () => {
  const { tableData, deleteTask, filterTable } = useContext(DashboardContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTableData, setSearchTableData] = useState("");

  const filterdTableData =
    filterTable == ""
      ? tableData
      : tableData.filter((data) => data.task_status == filterTable);

  const dataSource = filterdTableData.map((table, index) => {
    table["no"] = index + 1;
    table["project"] = table.project_name;
    table["team"] = table.team_name;
    table["taskName"] = table.task_name;
    table["startDate"] = table.start_date;
    table["endDate"] = table.end_date;
    table["mode"] = (
      <DropDownButton
        menu={
          <Menu>
            <Menu.Item key="0">
              <p onClick={() => showModal()}>Edit</p>
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

    return table;
  });

  const onSearchTable = dataSource.filter((item) =>
    Object.keys(item).some((key) =>
      String(item[key]).toLowerCase().includes(searchTableData.toLowerCase())
    )
  ); //to filter table

  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "No.",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <TaskTableStyle>
      <article className="table-header">Tasks</article>
      <SearchBar
        value={searchTableData}
        onChange={(e) => setSearchTableData(e.target.value)}
      />
      <Table dataSource={onSearchTable} columns={columns} />
      <Popup
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        formTitle="Edit Table"
        footer={null}
      >
        <EditForm setIsModalVisible={setIsModalVisible} />
      </Popup>
    </TaskTableStyle>
  );
};

const ChartsWrapper = () => {
  return (
    <ChartsWrapperStyle>
      <LineChart />
      <BarChart />
    </ChartsWrapperStyle>
  );
};

function Dashboard() {
  const { loading } = useContext(DashboardContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <DashboardStyle>
      <ChartsWrapper />
      <TaskTable />
    </DashboardStyle>
  );
}

export default Dashboard;
