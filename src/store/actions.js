import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB, CLEAR_JOB, SET_THEMES, SET_JOB_TYPE } from './constains';

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

export const clearJob = () => ({
    type: CLEAR_JOB,
});

export const setTheme = (payload) => ({
    type: SET_THEMES,
});
