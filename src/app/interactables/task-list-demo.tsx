"use client";

import { TaskList } from "@/components/tambo/task-list";

// Sample task data that matches our schema
const sampleTasks = [
  {
    id: "86dxhtcxm",
    name: "AAP-SEN-03-ME-ETE-007_0",
    text_content: "Evaluación técnica de ofertas: de tanque de almacenamiento (3 ofertas)",
    due_date: "1759399200000",
    status: {
      type: "open",
      color: "#D33D44",
    },
  },
  {
    id: "86dxhtcy2",
    name: "Project Planning",
    text_content: "Create project timeline and resource allocation plan",
    due_date: "1760399200000",
    status: {
      type: "in progress",
      color: "#3498db",
    },
  },
  {
    id: "86dxhtcz3",
    name: "Documentation Review",
    text_content: "Review and update technical documentation",
    due_date: null,
    status: {
      type: "complete",
      color: "#2ecc71",
    },
  },
];

export function TaskListDemo() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">TaskList Component Demo</h1>
      
      {/* Basic usage */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
        <TaskList tasks={sampleTasks} />
      </div>

      {/* With title */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">With Title</h2>
        <TaskList 
          tasks={sampleTasks} 
          title="Current Sprint Tasks" 
        />
      </div>

      {/* Single task */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Single Task</h2>
        <TaskList 
          tasks={[sampleTasks[0]]} 
          title="Single Task Example" 
        />
      </div>

      {/* Empty state */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Empty State</h2>
        <TaskList 
          tasks={[]} 
          title="No Tasks" 
        />
      </div>
    </div>
  );
}
