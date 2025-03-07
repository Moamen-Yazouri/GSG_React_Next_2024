import TasksList from "@/components/Tasks-list/TasksList";
import { getTasks } from "@/services/fetchData.services";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-teal-300 to-teal-400 p-6">
      <h1 className="main-heading relative text-4xl font-bold text-white mb-10 pb-2 inline-block">Task Tracker</h1>
      <TasksList/>
    </div>
  );
}
