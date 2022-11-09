import React, { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { Menu, Calendar } from "antd";
import moment from "moment";

import { menus } from "../../data/menus";
import { removeUser, getUser, BASE_URL } from "../../global";
import Counter from "../Counter/Counter";
import { LayoutContext } from "../../context/LayoutContext";
import Spinner from "../Spinner/Spinner";

import {
  AllTaskIcon,
  CompleteIcon,
  OverDueIcon,
  TaskInIcon,
  TaskOutIcon,
} from "../../svg"; // icons

import {
  CalenderSiderBarStyle,
  CountersStyle,
  LayoutStyle,
  NavbarStyle,
  SidebarStyle,
} from "./Layout.style";
import { DashboardContext } from "../../context/dashboardContext";

const Counters = () => {
  const { countersNo, loading } = useContext(LayoutContext);
  const { setFilterTable } = useContext(DashboardContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <CountersStyle>
      <Counter
        icon={<AllTaskIcon />}
        heading="All Tasks"
        counterNo={countersNo && countersNo.all_tasks_count}
        color={({ theme }) => theme.gradients.dark}
        onClick={() => setFilterTable("allTask")}
      />
      <Counter
        icon={<TaskInIcon />}
        heading="Task In"
        counterNo={countersNo && countersNo.task_in_count}
        color={({ theme }) => theme.gradients.primary}
        onClick={() => setFilterTable("current")}
      />
      <Counter
        icon={<TaskOutIcon />}
        heading="Task Out"
        counterNo={countersNo && countersNo.task_out_count}
        color={({ theme }) => theme.gradients.success}
        onClick={() => setFilterTable("")}
      />
      <Counter
        icon={<CompleteIcon />}
        heading="Completed"
        counterNo={countersNo && countersNo.task_completed_count}
        color={({ theme }) => theme.gradients.funky}
        onClick={() => setFilterTable("")}
      />
      <Counter
        icon={<OverDueIcon />}
        heading="Over Due"
        counterNo={countersNo && countersNo.task_overdue_count}
        color={({ theme }) => theme.gradients.redish}
        onClick={() => setFilterTable("overdue")}
      />
    </CountersStyle>
  );
};

const Navbar = () => {
  const { name, avatar, email } = getUser();

  const URL = `${BASE_URL}/api`;

  return (
    <NavbarStyle>
      <h2 className="page-title">dashboard</h2>
      <figure className="action-button">
        <picture className="profile-image-wrapper">
          <img
            src={avatar ? `${URL}${avatar}` : "/images/avatar.png"}
            alt={name}
            className="avatar"
          />
        </picture>
        <figcaption className="profile-detail">
          <h3 className="name">{name}</h3>
          <p className="email">{email}</p>
        </figcaption>
      </figure>
    </NavbarStyle>
  );
};

const CalenderSidebar = () => {
  const [selectedDate, setSelectedDate] = useState(moment("2017-01-25"));

  const onDateSelect = (date) => {
    setSelectedDate(date.format("YYYY-MM-DD"));
  };

  return (
    <CalenderSiderBarStyle>
      <h3 className="heading">Calendar</h3>

      <article className="calender-wrapper">
        <Calendar fullscreen={false} onSelect={onDateSelect} />
      </article>
    </CalenderSiderBarStyle>
  );
};

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate("/login");
  };

  const { SubMenu } = Menu;

  return (
    <SidebarStyle>
      <article className="sidebar-container">
        <article className="sidebar-top">
          <h2 className="site-logo">Teamway</h2>
        </article>

        <Menu mode="inline" className="sidebar-menu">
          {menus.map((menu, index) => {
            const { icon, url, linkText, submenus } = menu;
            return submenus ? (
              <SubMenu
                key={index}
                title={
                  <article>
                    <span className="icon">{icon}</span>
                    <span>{linkText}</span>
                  </article>
                }
              >
                {submenus.map((submenu) => {
                  const { linkText, url } = submenu;
                  return (
                    <Menu.Item key={url}>
                      <NavLink to={url} className="submenu-item-link">
                        {linkText}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={index}>
                <NavLink to={url} className="menu-item-link">
                  <span className="icon">{icon}</span>
                  <p className="text">{linkText}</p>
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </article>

      <button className="logout-button" onClick={handleLogout}>
        <span className="icon">
          <MdLogout />
        </span>
        <p className="text">Logout</p>
      </button>
    </SidebarStyle>
  );
};

function Layout() {
  return (
    <LayoutStyle>
      <SideBar />
      <Navbar />
      <CalenderSidebar />
      <article className="dashboard-content">
        <Counters />
        <Outlet />
      </article>
    </LayoutStyle>
  );
}

export default Layout;
