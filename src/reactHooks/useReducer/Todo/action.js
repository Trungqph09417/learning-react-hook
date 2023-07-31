import { SET_JOD, ADD_JOD, DELETE_JOD } from "./constant";
export const setJob = (payload) => {
  return {
    type: SET_JOD,
    payload,
  };
};
export const addJob = (payload) => {
  return {
    type: ADD_JOD,
    payload,
  };
};
export const deleteJob = (payload) => {
  return {
    type: DELETE_JOD,
    payload,
  };
};
