import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useStore, action } from '../../store';
import Creatable from 'react-select/creatable';
import { jobTypes } from '../../components/jobtype';
import moment from 'moment/moment';

function Home() {
    const [state, dispatch] = useStore();
    const [openedit, setOpenedit] = useState(null);
    const [deadline, setDeadline] = useState(null);
    const [isdisabled, setDisabled] = useState(false);
    const { joblist, jobinput, jobtype, date } = state;
    const inputRef = useRef();
    const updateinputRef = useRef();

    const handleAdd = () => {
        if (jobinput.trim() !== '' && jobtype !== '') {
            dispatch(action.addJob([jobtype, jobinput]));
            dispatch(action.setJob(''));
            inputRef.current.focus();
        }
    };

    const handleOpenEdit = (index) => {
        updateinputRef.value = joblist[index].job;
        console.log(updateinputRef.value);
        setOpenedit(index);
        setDisabled(true);
    };

    const handleEdit = (payload) => {
        if (jobinput.trim() !== '') {
            setDisabled(false);
            dispatch(action.editJob(payload));
            dispatch(action.setJob(''));
            setOpenedit(null);
        }
    };

    const handleCancel = () => {
        setOpenedit(null);
        setDisabled(false);
        dispatch(action.setJob(''));
    };

    const handleClear = () => {
        dispatch(action.clearJob());
        localStorage.clear();
    };
    const handleTimeInput = (value) => {
        const current = new Date();
        if (moment(value).diff(current, 'days') > 0) {
            dispatch(action.setDate(value));
        }
    };

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(joblist));
    }, [joblist]);
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full  max-w-[1140px] flex flex-col items-center justify-between">
                <div className="flex mb-2">
                    <Creatable
                        isDisabled={isdisabled}
                        defaultValue=""
                        onChange={(e) => dispatch(action.setJobType(e.value))}
                        className="mr-2 min-w-[140px]"
                        options={jobTypes}
                    />
                    <input
                        className="border-[1px] rounded p-1 bg-pink-50 placeholder-pink-400 outline-pink-700"
                        ref={inputRef}
                        value={jobinput}
                        disabled={isdisabled}
                        placeholder="Enter your job here"
                        onChange={(e) => dispatch(action.setJob(e.target.value))}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleAdd();
                            }
                        }}
                    />
                    <button
                        className="ml-2 px-1 rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                        onClick={handleAdd}
                    >
                        Thêm mới
                    </button>
                </div>
                <div className="w-full flex-col items-center justify-center">
                    {joblist.map((job, index) =>
                        openedit !== index ? (
                            <li
                                className="min-h-[34px] flex items-center justify-between border-l-[1px] border-b-[1px] list-none"
                                key={index}
                            >
                                <div className="flex flex-col flex-auto justify-start">
                                    <span className="text-[#fff]  text-lg font-medium flex-auto text-start flex-wrap p-1 max-w-[300px] ">
                                        {job.type}
                                    </span>
                                    <span className="text-[#fff] text-start  flex-auto flex-wrap p-1 max-w-[300px] ">
                                        Nội dung: {job.job}
                                    </span>
                                    {job.date ? (
                                        <span className="text-[#fff] text-start  flex-auto flex-wrap p-1 max-w-[300px] ">
                                            Deadline: {job.date}
                                        </span>
                                    ) : (
                                        <React.Fragment />
                                    )}
                                </div>
                                <div className="">
                                    <button
                                        className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                        onClick={() => handleOpenEdit(index)}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                        onClick={() => dispatch(action.deleteJob(index))}
                                    >
                                        Hoàn Thành
                                    </button>
                                    <button
                                        className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                        onClick={() => dispatch(action.deleteJob(index))}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <div
                                className="min-h-[34px] flex items-center justify-between border-b-[1px] list-none"
                                key={index}
                            >
                                <div className="flex flex-col">
                                    <Creatable
                                        defaultValue=""
                                        onChange={(e) => dispatch(action.setJobType(e.value))}
                                        className="mb-2"
                                        options={jobTypes}
                                    />
                                    <input
                                        ref={updateinputRef}
                                        className="border-[1px] rounded p-1 mb-2 bg-pink-50 placeholder-pink-400 outline-pink-700"
                                        value={jobinput}
                                        placeholder="Update your job"
                                        onChange={(e) => dispatch(action.setJob(e.target.value))}
                                        onKeyDown={(e) => {
                                            if (e.keyCode === 13) {
                                                handleEdit({ jobinput, index });
                                            }
                                        }}
                                    />
                                    {deadline === index || job.date ? (
                                        <div>
                                            <input
                                                type={'date'}
                                                className="border-[1px] rounded p-1 mb-2 bg-pink-50 placeholder-pink-400 outline-pink-700"
                                                placeholder="Update your job"
                                                onChange={(e) => handleTimeInput(e.target.value)}
                                            />
                                            <button
                                                className="ml-2 p-1  h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                                onClick={() => setDeadline(null)}
                                            >
                                                x
                                            </button>
                                        </div>
                                    ) : (
                                        <React.Fragment />
                                    )}
                                </div>
                                <div className="">
                                    <button
                                        className="ml-2 p-1  h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                        onClick={() => setDeadline(index)}
                                    >
                                        Add Deadline
                                    </button>

                                    <button
                                        className="ml-2 p-1  h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                        onClick={() => handleEdit({ arr: [jobtype, jobinput, date], index })}
                                    >
                                        Apply
                                    </button>

                                    <button
                                        className="ml-2 p-1  h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                        onClick={() => handleCancel()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ),
                    )}
                </div>
                <div className="min-h-[30px] mt-5">
                    <button
                        className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                        onClick={handleClear}
                    >
                        Clear job list
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Home;
