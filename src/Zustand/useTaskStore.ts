import { create } from "zustand";
interface formData {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "تکمیل شده" | "درحال انجام";
}

interface formStore {
  formData: formData[];
  completedData: formData [];
  setFormData: (data: formData) => void;
  completeTask: (index: number) => void;
  isloading:boolean;
  setIsLoading:(loading:boolean)=>void;
}

const useStore = create<formStore>((set) => ({
  formData: [],
  completedData:[],
  isloading:false,
  setIsLoading:(loading)=>set({isloading:loading}),
  setFormData: (data) =>
    set((state) => ({ formData: [...state.formData, data] })),
  completeTask: (index) =>
    set((state) => {
      const taskToComplete = state.formData[index];
      if (taskToComplete) {
        taskToComplete.status = 'تکمیل شده'; // تغییر وضعیت
        return {
          formData: state.formData.filter((_, i) => i !== index), // حذف از لیست در حال انجام
          completedData: [...state.completedData, taskToComplete], // اضافه کردن به لیست تکمیل شده‌ها
        };
      }
      return state;
    }),
}));

export default useStore;
