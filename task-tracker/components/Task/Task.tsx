import type { ITask } from "@/types/@types"
import Image from "next/image"
import complete from "@/public/checked.png"
import pending from "@/public/clock.png"
import Link from "next/link"

interface IProps {
  data: ITask
}

const Task = (props: IProps) => {
  const { title, completed, id } = props.data

  return (
    <div className="w-full mb-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-200">
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
                <Image
                src={completed ? complete : pending}
                alt={completed ? "Completed" : "Pending"}
                className="object-contain"
                fill
                />
            </div>

            <Link
                href={`/task-details/${id}`}
                className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:underline transition-colors"
            >
                {title}
            </Link>
            </div>

            <span
            className={`
            inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
            ${
                completed
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-amber-100 text-amber-800 border border-amber-200"
            }
            `}
            >
            {completed ? "Completed" : "Pending"}
            </span>
        </div>
</div>
  )
}

export default Task

