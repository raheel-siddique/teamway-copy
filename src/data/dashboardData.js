import {
  AllTaskIcon,
  CompleteIcon,
  OverDueIcon,
  TaskInIcon,
  TaskOutIcon,
} from "../svg";

export const counters = [
  {
    icon: <AllTaskIcon />,
    heading: "All Tasks",
    counterNo: 3,
    color: ({ theme }) => theme.gradients.dark,
  },
  {
    icon: <TaskInIcon />,
    heading: "Task In",
    counterNo: 5,
    color: ({ theme }) => theme.gradients.primary,
  },
  {
    icon: <TaskOutIcon />,
    heading: "Task Out",
    counterNo: 7,
    color: ({ theme }) => theme.gradients.success,
  },
  {
    icon: <CompleteIcon />,
    heading: "Completed",
    counterNo: 4,
    color: ({ theme }) => theme.gradients.funky,
  },
  {
    icon: <OverDueIcon />,
    heading: "Over Due",
    counterNo: 3,
    color: ({ theme }) => theme.gradients.redish,
  },
];
