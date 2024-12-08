import axios from 'axios';
import { Assignment, AssignmentMetrics } from '../types/assignmentTypes';

const API_BASE_URL = 'http://localhost:5000/api/assignments';

export const fetchActiveAssignments = async (): Promise<Assignment[]> => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data;
};

export const fetchAssignmentMetrics = async (): Promise<AssignmentMetrics> => {
  const response = await axios.get(`${API_BASE_URL}/metrics`);
  return response.data;
};

export const runAssignment = async (orderId: string, partnerId: string) => {
  const response = await axios.post(`${API_BASE_URL}/run`, { orderId, partnerId });
  return response.data;
};
