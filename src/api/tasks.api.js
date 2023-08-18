import axios from "axios";
// const API_URL = process.env.REACT_APP_API || "http://localhost:5000/tasks";

// Plural
export const getTaskRequest = async () =>
  await axios.get(`https://mern-server-production-6689.up.railway.app/tasks`);

export const createTaskRequest = async (task) =>
  await axios.post(`https://mern-server-production-6689.up.railway.app/tasks`, task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`https://mern-server-production-6689.up.railway.app/tasks/${id}`);

// Singular
export const getTaskReques = async (id) =>
  await axios.get(`https://mern-server-production-6689.up.railway.app/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`https://mern-server-production-6689.up.railway.app/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`https://mern-server-production-6689.up.railway.app/tasks/${id}`, {
    done: done,
  });
