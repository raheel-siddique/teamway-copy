import { createContext, useEffect, useReducer } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

import { BASE_URL, getUser } from "../global";
import { reducers } from "../reducers/reducers";

export const LayoutContext = createContext();

const LayoutProvider = () => {
  const initialState = {
    items: [],
    tasks: [],
    loading: true,
  };

  const { token } = getUser();

  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    if (token) {
      getCounterData();
    }
  }, [token]);

  const getCounterData = async () => {
    const URL = `${BASE_URL}/apilanding-page/?count=true&start_date=1650394799`;
    await axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.success == true) {
          dispatch({
            type: "GET_ITEM",
            payload: res.data.data,
          });
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <LayoutContext.Provider
      value={{
        countersNo: state.items,
        loading: state.loading,
      }}
    >
      <Outlet />
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
