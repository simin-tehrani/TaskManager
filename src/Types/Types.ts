export interface Task {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "تکمیل شده" | "درحال انجام";
}
