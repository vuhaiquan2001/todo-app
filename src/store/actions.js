import {
    SET_JOB,
    ADD_JOB,
    DELETE_JOB,
    EDIT_JOB,
    CLEAR_JOB,
    SET_THEMES,
    SET_DATE,
    SET_JOB_TYPE,
    COMPLETE_JOBS,
    CLEAR_COMPL_JOB,
} from './constains';

export const setJob = (payload) => ({
    type: SET_JOB,
    payload,
});

export const addJob = (payload) => ({
    type: ADD_JOB,
    payload,
});

export const deleteJob = (payload) => ({
    type: DELETE_JOB,
    payload,
});

export const editJob = (payload) => ({
    type: EDIT_JOB,
    payload,
});

export const setJobType = (payload) => ({
    type: SET_JOB_TYPE,
    payload,
});
export const setDate = (payload) => ({
    type: SET_DATE,
    payload,
});

export const setCompleteJobs = (payload) => ({
    type: COMPLETE_JOBS,
    payload,
});

export const clearJob = () => ({
    type: CLEAR_JOB,
});

export const clearComplJob = () => ({
    type: CLEAR_COMPL_JOB,
});

export const setTheme = (payload) => ({
    type: SET_THEMES,
});
