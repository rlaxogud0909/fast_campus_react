import logo from "./logo.svg";
import "./App.css";
// import TestMocking from "./components/TestMocking";
// import MobxExample from "./components/MobxExample";
import TodoList from "./components/TodoList";
import { observableTodoStore } from "./app/ObservableTodoStore";

function App() {
    return (
        <div className="App">
            {/* <TestMocking /> */}
            {/* <MobxExample /> */}
            <TodoList store={observableTodoStore} />
        </div>
    );
}

export default App;
