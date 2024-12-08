import axios from 'axios';
import { Order } from '../types/orderTypes';

const API_BASE_URL = 'http://localhost:5000/api/orders';

export const fetchOrders = async (): Promise<Order[]> => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  const response = await axios.put(`${API_BASE_URL}/${orderId}/status`, { status });
  return response.data;
};

export const assignOrder = async (orderId: string, partnerId: string) => {
  const response = await axios.post(`${API_BASE_URL}/assign`, { orderId, partnerId });
  return response.data;
};
