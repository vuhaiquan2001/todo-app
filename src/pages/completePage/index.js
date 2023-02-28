import React from 'react';
import { useStore, action } from '../../store';
import { moment } from 'moment/moment';
import { clearComplJob } from './../../store/actions';

function CompleteJobPage() {
    const [state, dispatch] = useStore();
    console.log(state.completeJob);

    const handleClearCompl = () => {
        dispatch(action.clearComplJob());
        localStorage.removeItem('completejobs');
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full h-full  max-w-[1140px] flex flex-col items-center justify-between">
                {state.completeJob.map((obj, index) => {
                    let a = new Date(obj.compleDate);
                    return (
                        <li
                            key={index}
                            className="min-h-[34px] w-full flex items-center justify-between border-l-[1px] border-b-[1px] list-none"
                        >
                            <div className="flex flex-col flex-auto justify-start">
                                <span className="text-[#90bbff]  text-lg font-medium flex-auto text-start flex-wrap p-1 ">
                                    Ngày hoàn thành : {a.toLocaleDateString()}
                                </span>
                                <span className="text-[#90bbff]  text-lg font-medium flex-auto text-start flex-wrap p-1 ">
                                    Tiêu đề :{obj['0'].type}
                                </span>
                                <span className="text-[#fff] text-start  flex-auto flex-wrap p-1 ">
                                    Nội dung: {obj['0'].job}
                                </span>
                                {obj['0'].date ? (
                                    <span className="text-[#fff] text-start  flex-auto flex-wrap p-1 ">
                                        Deadline: {obj['0'].date}
                                    </span>
                                ) : (
                                    <React.Fragment key={index} />
                                )}
                            </div>
                        </li>
                    );
                })}
                <div className="min-h-[30px] mt-5">
                    <button
                        onClick={() => handleClearCompl()}
                        className="ml-2 p-1 h-full rounded min-w-[80px] border-[1px] font-medium text-[#fff] hover:bg-pink-500"
                    >
                        Clear job list
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CompleteJobPage;
