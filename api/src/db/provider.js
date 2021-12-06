import { Client, Provider } from "../models";

export const providerById = async (id) => {
  const provider = await Provider.findById(id);
  return provider;
};

export const getAllProviders = async () => {
  const providers = await Provider.find();
  return providers;
};

export const createProvider = async (body) => {
  const provider = await Provider.create(body);
  return provider;
};

export const updateProvider = async (id, body) => {
  const provider = await Provider.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  return provider;
};

export const deleteProvider = async (id) => {
  const provider = await Provider.findByIdAndRemove(id, {});
  await Client.updateMany({}, { $pull: { providers: provider._id } });
  return provider;
};
