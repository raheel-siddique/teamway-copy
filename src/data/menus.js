import {
  MdDashboard,
  MdSupervisorAccount,
  MdMyLocation,
  MdTask,
  MdLaptopChromebook,
  MdCheckCircle,
  MdIndeterminateCheckBox,
} from "react-icons/md";

export const menus = [
  {
    icon: <MdDashboard />,
    url: "/",
    linkText: "Dashboard",
  },
  {
    icon: <MdTask />,
    linkText: "Task",
    submenus: [
      {
        linkText: "Create Task",
        url: "/create-task",
      },
      {
        linkText: "Task List",
        url: "/task-list",
      },
    ],
  },
  {
    icon: <MdSupervisorAccount />,
    linkText: "Teams",
    submenus: [
      {
        linkText: "Create Team",
        url: "/create-teams",
      },
      {
        linkText: "Team List",
        url: "/team-list",
      },
    ],
  },
  {
    icon: <MdLaptopChromebook />,
    linkText: "Project",
    submenus: [
      {
        linkText: "Create Project",
        url: "/create-project",
      },
      {
        linkText: "Projects List",
        url: "/projects-list",
      },
    ],
  },
  {
    icon: <MdMyLocation />,
    url: "/location",
    linkText: "Location",
  },
  {
    icon: <MdCheckCircle />,
    url: "/approval",
    linkText: "Approval",
  },
  {
    icon: <MdIndeterminateCheckBox />,
    url: "/leave-request",
    linkText: "Leave Request",
  },
];
