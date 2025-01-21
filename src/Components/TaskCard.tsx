interface TaskCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "تکمیل شده" | "درحال انجام";
  onComplete?: () => void;
}

const TaskCard = (props: TaskCardProps) => {
  return (
    <div
      className={` flex flex-col rounded-xl justify-center gap-4  w-72 max-h-[370px] shadow-xl  backdrop-blur-lg bg-white/30`}
    >
      <div
        className={`relative bg-clip-border mt-6 ml-4 mr-4 rounded-lg  shadow-md h-45 bg-gradient-to-l from-gray-100 to-zinc-300`}
      >
        <h1 className="anton-regular text-end pt-2 pr-3 text-sm"></h1>
        <h1 className="font-bold text-center text-xl py-4 mb-5 ubuntu-bold text-sky-950 ">
          {props.title}
        </h1>
      </div>
      <div className="border-0 p-2 text-center">
        <p className="poppins-light border">{props.description}</p>
        <div className="flex justify-between mt-[5px] text-sm font-semibold py-2 px-4">
          <div className="flex justify-center flex-col">
            <div className="text-red-700 m-3 ">تاریخ شروع</div>
            <p className="font-light border">{props.startDate}</p>
          </div>
          <div className="flex justify-center flex-col">
            <p className="text-red-700 m-3">تاریخ پایان</p>
            <div className="font-light border">{props.endDate}</div>
          </div>
        </div>
        <div className=" justify-center flex-wrap">
          <p className="text-red-950 font-medium">
            : وضعیت{<br></br>}
            <span className="border rounded w-2/4 block h-8 text-center m-auto mt-3 ">
              {props.status === "درحال انجام" ? "در حال انجام" : "تکمیل شده"}
            </span>
          </p>

          {props.status === "درحال انجام" && props.onComplete && (
            <button
              onClick={props.onComplete}
              className="bg-gradient-to-r from-neutral-300 to-stone-400 rounded w-2/4 mt-4 h-10"
            >
              تکمیل وظیفه
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
