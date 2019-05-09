import axios from "axios";
const BASE_URL = "http://localhost:8080/menu";
const ORDER_URL = "http://localhost:8080/history";

const getAllMenuItems = () =>
  axios.get(BASE_URL).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

const getAllOrderItem = () =>
  axios.get(ORDER_URL).then(response => response.data);
const getOrderItemById = id =>
  axios.get(`${ORDER_URL}/${id}`).then(response => response.data);
const delOrderItem = id =>
  axios.delete(`${ORDER_URL}/${id}`).then(response => response.status === 200);
const addOrderItem = item =>
  axios.post(ORDER_URL, item).then(response => response.data);

export {
  getAllMenuItems,
  getMenuItemById,
  deleteMenuItem,
  addMenuItem,
  getAllOrderItem,
  getOrderItemById,
  delOrderItem,
  addOrderItem
};
