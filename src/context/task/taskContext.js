import { createContext } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { BASE_URL, getUser } from "../../global";

export const TaskContext = createContext();

const TaskProvider = () => {
  const { token } = getUser();

  const URL = `${BASE_URL}/api/tasks`;

  const addTask = async (newTask) => {
    const { taskName, assignedTo, description, startDate, endDate, offSet } =
      newTask;

    console.log(newTask);

    await axios
      .post(
        URL,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          task_name: taskName,
          assign_to: assignedTo,
          description: description,
          start_date: startDate,
          end_date: endDate,
          enable_offsite: offSet,
          SubTasks: [],
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
      }}
    >
      <Outlet />
    </TaskContext.Provider>
  );
};

export default TaskProvider;
