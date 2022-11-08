import React, { useContext, useState } from "react";
import { TaskContext } from "../context/task/taskContext";

function useTask() {
  const { addTask } = useContext(TaskContext);

  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [offset, setOffset] = useState(false);

  const handleStartDate = (date, dateString) => {
    setStartDate(dateString);
  };

  const handleEndDate = (date, dateString) => {
    setEndDate(dateString);
  };

  const handleAssigned = (assigned) => {
    setAssignedTo(assigned);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      taskName,
      assignedTo,
      description,
      startDate,
      endDate,
      offset,
    };

    if (
      taskName !== "" &&
      assignedTo !== "" &&
      assignedTo !== "Assign To" &&
      description !== "" &&
      startDate !== "" &&
      endDate !== "" &&
      offset !== false
    ) {
      addTask(newTask);
    }
  };

  return {
    taskName,
    description,
    setTaskName,
    handleAssigned,
    setDescription,
    handleStartDate,
    handleEndDate,
    setOffset,
    handleSubmit,
  };
}

export default useTask;
