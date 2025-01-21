import TaskCard from "../Components/TaskCard";
import useStore from "./../Zustand/useTaskStore";

const CompleteTask: React.FC = () => {
  const formData = useStore((state) => state.formData);
  const completedData = useStore((state) => state.completedData);
  const{isloading}=useStore()
  return (
    <div>
      <div>
        <h1 className="container mx-auto text-center mb-4 pb-4 font-bold text-lg">
          وظایف تکمیل شده
        </h1>

        <div className="grid grid-cols-3 gap-6">
        {isloading&&<p>isLoading.....</p>}
          {formData.map((item) => {
            console.log(item);
            if (item.status === "تکمیل شده") {
              return <TaskCard {...item} key={item.id} />;
            }
          })}
          {completedData.map((item) => {
            console.log(item);
            if (item.status === "تکمیل شده") {
              return <TaskCard {...item} key={item.id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
