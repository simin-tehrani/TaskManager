import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import TaskForm from "./Forms/AddTaskForm";
import CompleteTask from "./pages/CompleteTask";
import Home from "./pages/Home";
import InProgressTask from "./pages/InProgressTask";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completetask" element={<CompleteTask />} />
        <Route path="/inProgresstask" element={<InProgressTask />} />
        <Route path="/addtask" element={<TaskForm />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
