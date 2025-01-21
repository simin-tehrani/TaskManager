import TaskCard from "../Components/TaskCard";
import useStore from "./../Zustand/useTaskStore";



function InProgressTask() {

  const formData = useStore((state) => state.formData);
  const completeTask = useStore((state) => state.completeTask);

 
 
  return (
    <div>
      <div>
        <h1 className="container mx-auto text-center mb-4 pb-4 font-bold text-lg">
          وظایف در حال انجام
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {formData.map((item,index) => {
            if (item.status === "درحال انجام") {
              return <TaskCard {...item} key={index}  onComplete={() => completeTask(index)} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default InProgressTask;
