import React, { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = () => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { todos } = useTodo();
  const [todoMsg, setTodoMsg] = useState(todos[0].todo);
  console.log(isTodoEditable);

  const { deleteTodo, toggleComplete, updateTodo } = useTodo();

  function editTodo() {
    updateTodo(todos[0].id, { ...todos, todo: todoMsg });
    setIsTodoEditable((prev) => !prev);
  }
  function toggleCompletedd() {
    toggleComplete(todos[0].id);
  }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todos[0].completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todos[0].completed}
        onChange={toggleCompletedd}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todos[0].completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={isTodoEditable === false}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => {
          if (todos[0].completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todos[0].completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todos[0].id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
