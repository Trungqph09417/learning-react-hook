import { SET_JOD, ADD_JOD, DELETE_JOD } from "./constant";
export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_JOD:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOD:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOD:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("Invalid ");
  }
};
export default reducer;
