import { SET_JOB, ADD_JOB, DELETE_JOB, CLEAR_JOB, EDIT_JOB, SET_JOB_TYPE } from './constains';

const initstate = {
    joblist: localStorage.getItem('items') === null ? [] : JSON.parse(localStorage.getItem('items')),
    jobinput: '',
    color: localStorage.getItem('themes') === null ? '' : JSON.parse(localStorage.getItem('themes')),
    jobtype: '',
};

function reducer(state, action) {
    let newstate = [];
    switch (action.type) {
        case SET_JOB:
            newstate = { ...state, jobinput: action.payload };
            break;
        case ADD_JOB:
            newstate = {
                ...state,
                joblist: [...state.joblist, { type: action.payload[0], job: action.payload[1] }],
            };
            break;
        case DELETE_JOB:
            const newlist = [...state.joblist];
            newlist.splice(action.payload, 1);
            newstate = { ...state, joblist: newlist };
            break;
        case EDIT_JOB:
            const list = [...state.joblist];
            list.splice(action.payload.index, 1, { type: action.payload.arr[0], job: action.payload.arr[1] });

            newstate = { ...state, joblist: list };
            break;
        case SET_JOB_TYPE:
            newstate = { ...state, jobtype: action.payload };
            break;
        case CLEAR_JOB:
            newstate = { ...state, joblist: [] };
            break;
        default:
            throw new Error('invalid action');
    }
    return newstate;
}

export { initstate };
export default reducer;
