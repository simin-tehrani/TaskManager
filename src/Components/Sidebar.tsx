import { AiOutlineLogin } from "react-icons/ai";
import { GrTask } from "react-icons/gr";
import {
  MdAddTask,
  MdDashboard,
  MdOutlineTaskAlt,
  MdPendingActions,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="font-vazir bg-gradient-to-r from-slate-900 to-slate-700 h-screen sm:w-[19rem] flex flex-col gap-4 ">
      <div className="flex items-center gap-2 justify-center h-16 text-white text-2xl font-bold mt-6">
        <span className="sm:block hidden ">مدیریت وظایف</span>
        <GrTask />
      </div>
      <nav className="flex gap-10 justify-start backdrop-blur-lg bg-white/30 rounded-3xl m-6">
        <ul className="py-6 flex flex-col ">
          <Link
            to="/"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-end items-center gap-2"
          >
            <span className="sm:block hidden">صفحه اصلی</span>
            <MdDashboard className="text-2xl" />
          </Link>

          <Link
            to="/Login"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-end items-center gap-2"
          >
            <span className="sm:block hidden">ورود/ ثبت نام</span>
            <AiOutlineLogin className="text-2xl" />
          </Link>

          <Link
            to="/completetask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-end items-center gap-2"
          >
            <span className="sm:block hidden">وظایف تکمیل شده</span>
            <MdOutlineTaskAlt className="text-2xl" />
          </Link>
          <Link
            to="/inProgresstask"
            className="text-right px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-end items-center gap-2"
          >
            <span className="sm:block hidden text-right">
              وظایف درحال انجام
            </span>
            <MdPendingActions className="text-2xl" />
          </Link>

          <Link
            to="/addtask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-end items-center gap-2"
          >
            <span className="sm:block hidden">اضافه کردن وظیفه جدید</span>
            <MdAddTask className="text-2xl" />
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
