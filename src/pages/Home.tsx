import TaskCard from "../Components/TaskCard";
import useStore from "./../Zustand/useTaskStore";

function Home() {
  const formData = useStore((state) => state.formData);
  const completedData = useStore((state) => state.completedData);
  const{isloading}=useStore()

  return (
    <div>
      <h1 className="container mx-auto text-center mb-4 pb-4 font-bold text-lg">
        سامانه مدیریت وظایف
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {isloading&&<p>isLoading.....</p>}
        {formData.map((item) => (
          <TaskCard {...item} key={item.id} />
        ))}
        {completedData.map((item) => {
          return <TaskCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
