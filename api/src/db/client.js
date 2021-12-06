import { Client } from "../models";

export const clientById = async (id) => {
  const client = await Client.findById(id);
  return client;
};

export const getAllClients = async () => {
  const clients = await Client.find();
  return clients;
};

export const createClient = async (body) => {
  const client = await Client.create(body);
  return client;
};

export const updateClient = async (id, body) => {
  const client = await Client.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  return client;
};

export const deleteClient = async (id) => {
  const client = await Client.findByIdAndRemove(id);
  return client;
};
