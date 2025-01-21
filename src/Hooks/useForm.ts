import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Task } from "../Types/Types";
import  useStore  from "./../Zustand/useTaskStore";

interface formValues {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "تکمیل شده" | "درحال انجام";
}

const UseFormHook = () => {
  const Navigate = useNavigate();

  const setFormData = useStore((state) => state.setFormData);
  const{setIsLoading}=useStore()

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<formValues>();

  const nav = (data: Task) => {
    if (data.status == "تکمیل شده") {
      Navigate("/completetask");
    } else if (data.status == "درحال انجام") {
      Navigate("/inProgresstask");
    }
  };
  const showalert = () => {
    Swal.fire({
      title: "",
      text: "وظیفه جدید شما به لیست وظایف اضافه شد",
      confirmButtonText: "متوجه شدم",
      background: "#8B0000",
      color: "#FDF5E6",
      confirmButtonColor: "#708090",
    });
  };

  const onSubmit = (data: Task) => {
    setIsLoading(true)
    try{setFormData(data);
      showalert(), nav(data);}
      catch(error){console.log(error);
      }finally{
        setIsLoading(false)
      }
    
    
  };
  return {
    handleSubmit,
    errors,
    onSubmit,
    control,
  };
};
export default UseFormHook;
