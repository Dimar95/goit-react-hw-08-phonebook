import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'



export const registerUserApi = async objUser => {
  const result = await axios.post(
    `users/signup`,
    objUser
  );
  return result.data;
};
export const loginUserApi = async objUser => {
  const result = await axios.post(
    `users/login`,
    objUser
  );
  return result.data;
};
export const loginCurrentUserApi = async () => {
  const result = await axios.get(
    `users/current`
  );
  return result.data;
};
export const addContactsUserApi = async objUser => {
  const result = await axios.post(
    `contacts`,
    objUser
  );
  return result.data;
};

export const getContactsUserApi = async () => {
  const result = await axios.get(
    `contacts`
  );
  return result.data;
};
export const deleteContactsUserApi = async id => {
  const result = await axios.delete(
    `contacts/${id}`
  );
  return result.data;
};

export const logoutUserApi = async () => {
  const result = await axios.post(
    `users/logout`
  );
  return result.data;
};