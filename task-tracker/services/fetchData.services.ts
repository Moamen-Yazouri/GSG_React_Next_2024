import { ITask } from "@/types/@types";

export const getTasks = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await res.json();
        return data as ITask[];
    }
    catch{
        throw new Error("Fetching Failed!");
    }
}
export const getTaskById = async (id: number) => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await res.json();
        return data as ITask;
    }
    catch{
        throw new Error("Failed To Fetch The Task!");
    }
}