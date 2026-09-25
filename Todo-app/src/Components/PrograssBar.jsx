import React from "react";

function ProgressBar({ todos }) {

  const totalTodos = todos.length;

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length;

  const progress =
    totalTodos === 0
      ? 0
      : Math.round((completedTodos / totalTodos) * 100);

  return (
    <div className="w-full mt-4">

      {/* Text */}
      <div className="flex justify-between items-center mb-2">

        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Progress
        </p>

        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {completedTodos} / {totalTodos}
        </p>

      </div>

      {/* Progress Background */}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">

        {/* Progress */}
        <div
          className="h-full bg-purple-600 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

      {/* Percentage */}
      <p className="text-center mt-2 text-sm text-slate-500 dark:text-slate-400">
        {progress}% Completed
      </p>

    </div>
  );
}

export default ProgressBar;