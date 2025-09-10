"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { z } from "zod";

// Define the schema for a single task
const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  text_content: z.string(),
  due_date: z.string().nullable(),
  status: z.object({
    type: z.string(),
    color: z.string(),
  }),
});

// Define the schema for the task list component props
export const taskListSchema = z.object({
  tasks: z.array(taskSchema).describe("Array of tasks to display"),
  title: z.string().optional().describe("Optional title for the task list"),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskListProps = z.infer<typeof taskListSchema> & React.HTMLAttributes<HTMLDivElement>;

export function TaskList({ tasks = [], title, className, ...props }: TaskListProps) {
  // Debug output for tasks
  console.log('TaskList - tasks array:', {
    numberOfTasks: tasks?.length || 0,
    tasks: tasks?.map(task => ({
      id: task.id,
      name: task.name,
      status: task.status,
      due_date: task.due_date
    }))
  });

  // Function to format date from timestamp
  const formatDate = (timestamp: string | null) => {
    if (!timestamp) return "No due date";
    return new Date(parseInt(timestamp)).toLocaleDateString();
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      {title && (
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
      )}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks?.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                  No tasks available
                </td>
              </tr>
            )}
            {tasks?.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {task.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {task.text_content}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(task.due_date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span 
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    style={{
                      backgroundColor: `${task.status.color}20`,
                      color: task.status.color,
                    }}
                  >
                    {task.status.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

TaskList.displayName = "TaskList";
