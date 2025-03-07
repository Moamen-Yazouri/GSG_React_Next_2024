'use client'
import React, { useState } from 'react'
interface IProps {
    title: string;
}
const TaskCopy = (props: IProps) => {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(props.title);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }
    return (
        <button
        onClick={copyToClipboard}
        className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer transition-[3] hover:bg-teal-300"
        >
        {copied ? "✅ Copied!" : "📋 Copy Title"}
        </button>
    )
}

export default TaskCopy;