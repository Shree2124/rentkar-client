import axios from 'axios';
import { DeliveryPartner } from '../types/partnerTypes';

const API_URL = '/api/partners';

export const fetchPartners = async (): Promise<DeliveryPartner[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPartner = async (partner: DeliveryPartner): Promise<void> => {
  await axios.post(API_URL, partner);
};

export const updatePartner = async (id: string, partner: DeliveryPartner): Promise<void> => {
  await axios.put(`${API_URL}/${id}`, partner);
};

export const deletePartner = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
