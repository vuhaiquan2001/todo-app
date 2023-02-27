import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="w-full flex justify-center items-center mb-4 bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 drop-shadow-md">
            <div className="w-full h-12  max-w-[1140px] flex flex-row justify-between">
                <Link className="h-full flex items-center ml-2" to="/">
                    <img
                        className="w-9 mr-1"
                        src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"
                        alt="logo"
                    />
                    <span className="text-2xl text-slate-200 font-semibold">Quản lý công việc của bạn !</span>{' '}
                </Link>
                <div className="flex">
                    <div className="flex relative group items-center justify-center min-w-[100px] rounded cursor-pointer mr-2 my-1 border-[1px] border-[#feaee3] hover:bg-pink-500 hover:text-[#fff]">
                        <span className="text-lg px-1 text-[#fff2fd] font-medium">Job đã hoàn thành</span>
                    </div>
                    <div className="flex relative group items-center justify-center min-w-[100px] rounded cursor-pointer mr-2 my-1 border-[1px] border-[#feaee3] hover:bg-pink-500 hover:text-[#fff]">
                        <img
                            className="w-[18px] mr-1"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/BYR_color_wheel.svg/2048px-BYR_color_wheel.svg.png"
                            alt="color img"
                        />
                        <span className="text-lg text-[#fff2fd] font-medium">Color</span>
                        <div className=" absolute hidden top-[120%] right-[50%] translate-x-1/2 min-w-[160px] bg-pink-500 rounded-md group-hover:flex flex-col">
                            <div className="absolute w-full top-[-10px] h-3"></div>
                            <div className="hover:bg-pink-300 pl-1 hover:rounded-t-md py-2 w-full h-full">
                                Chức năng này sẽ hoàn thiện trong tương lai ^^
                            </div>
                            <div className="hover:bg-pink-300 pl-1 py-2 w-full h-full">Dark Mode</div>
                            <div className="hover:bg-pink-300 pl-1 hover:rounded-b-md py-2 w-full h-full">
                                Default Color
                            </div>
                            <div className="hover:bg-pink-300 pl-1 hover:rounded-b-md py-2 w-full h-full">
                                Custom your Color
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
