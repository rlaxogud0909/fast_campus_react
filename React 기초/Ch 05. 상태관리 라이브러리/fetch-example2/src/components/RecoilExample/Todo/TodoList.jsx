import React, { useEffect } from "react";
import { filteredTodoListState } from "./TodoStore";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    // useEffect(() => {
    //     console.log(`todolist: ${JSON.stringify(todoList)}`);
    // }, [todoList]);

    return (
        <div>
            <TodoListStats />
            <TodoListFilters />
            <TodoListCreator />
            {todoList.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </div>
    );
}
