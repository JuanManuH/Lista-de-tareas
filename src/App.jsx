import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { RecycledTasksPage } from "./Pages/RecycledTasksPage";
import { NavBar } from "./Components/NavBar";
import { TaskProvider } from "./Context/TaskProvider";
import { Task } from "./Components/Task";

function App() {
  return (
    <TaskProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deleted-tasks" element={<RecycledTasksPage />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;
