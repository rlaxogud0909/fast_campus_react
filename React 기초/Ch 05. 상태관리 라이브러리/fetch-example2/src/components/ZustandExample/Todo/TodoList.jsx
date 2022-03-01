// zustand 2
// Overwriting state -> set의 두번째 인자로 true를 주면 모델을 완전히 초기화
// Selector를 state 토대로 계산하는 건 함수로 만듬
// React와 관계 -> 리엑트 외부 혹은 바닐라에서도 동작

import TodoItem from "./TodoItem";
import { useStore } from "./TodoStore";
import TodoListCreator from "./TodoListCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

export default function TodoList() {
    const todoList = useStore((state) => state.filteredTodoListState());

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
