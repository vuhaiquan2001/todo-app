import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useStore, action } from '../../store';

function Home() {
    const [state, dispatch] = useStore();
    const [openedit, setOpenedit] = useState(null);
    const { joblist, jobinput } = state;
    const inputRef = useRef();

    const handleAdd = () => {
        if (jobinput.trim() !== '') {
            dispatch(action.addJob(jobinput));
            dispatch(action.setJob(''));
            inputRef.current.focus();
        }
    };
    const handleOpenEdit = (index) => {
        setOpenedit(index);
    };

    const handleEdit = (payload) => {
        if (jobinput.trim() !== '') {
            dispatch(action.editJob(payload));
            dispatch(action.setJob(''));
            setOpenedit(null);
        }
    };

    const handleClear = () => {
        dispatch(action.clearJob());
        localStorage.clear();
    };

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(joblist));
    }, [joblist]);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full h-12  max-w-[1140px] flex flex-col items-center justify-between">
                <div className="mb-2">
                    <input
                        className="border-[1px] rounded p-1 bg-pink-50 placeholder-pink-400 outline-pink-700"
                        ref={inputRef}
                        value={jobinput}
                        placeholder="Enter your job here"
                        onChange={(e) => dispatch(action.setJob(e.target.value))}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleAdd();
                            }
                        }}
                    />
                    <button
                        className="ml-2 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                        onClick={handleAdd}
                    >
                        {' '}
                        Button
                    </button>
                </div>
                <div className="w-full flex-col items-center justify-center">
                    {joblist.map((job, index) =>
                        openedit !== index ? (
                            <li className="min-h-[34px] flex items-center justify-center list-none" key={index}>
                                <span className="text-[#fff] flex-auto flex-wrap border-[1px] p-1 bg-pink-400 rounded max-w-[300px] text-center">
                                    {' '}
                                    {job}
                                </span>
                                <button
                                    className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                    onClick={() => handleOpenEdit(index)}
                                >
                                    {' '}
                                    edit
                                </button>

                                <button
                                    className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                    onClick={() => dispatch(action.deleteJob(index))}
                                >
                                    {' '}
                                    Delete
                                </button>
                            </li>
                        ) : (
                            <div className="min-h-[34px] flex items-center justify-center list-none" key={index}>
                                <input
                                    className="border-[1px] rounded p-1 bg-pink-50 placeholder-pink-400 outline-pink-700"
                                    value={jobinput}
                                    placeholder="Update your job"
                                    onChange={(e) => dispatch(action.setJob(e.target.value))}
                                    onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                            handleEdit({ jobinput, index });
                                        }
                                    }}
                                />
                                <button
                                    className="ml-2 p-1  h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                    onClick={() => handleEdit({ jobinput, index })}
                                >
                                    Apply
                                </button>

                                <button
                                    className="ml-2 p-1  h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                                    onClick={() => setOpenedit(null)}
                                >
                                    cancel
                                </button>
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
            </div>
        </div>
    );
}

export default Home;
