import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { BASE_URL, getUser } from "../global";
import { reducers } from "../reducers/reducers";

export const DashboardContext = createContext();

const DashboardProvider = () => {
  const initialState = {
    items: [],
    tasks: [],
    loading: true,
  };
  const [filterTable, setFilterTable] = useState("");

  const { token } = getUser();

  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    if (token) {
      getTaskData();
    }
  }, [token]);

  const URL = `${BASE_URL}/api/landing-page/?range_end_time=1653591599&all_tasks=1&task_in=0&task_out=0&overdue=0&completed=0`;

  const getTaskData = async () => {
    await axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          dispatch({
            type: "GET_TASKS",
            payload: res.data.data,
          });
        }
      })
      .catch((err) => alert(err));
  };

  const deleteTask = async (id) => {
    await axios
      .delete(`${URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getTaskData();
      })
      .catch((err) => alert(err));
  };

  return (
    <DashboardContext.Provider
      value={{
        loading: state.loading,
        tableData: state.tasks,
        deleteTask,
        setFilterTable,
        filterTable,
      }}
    >
      <Outlet />
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
