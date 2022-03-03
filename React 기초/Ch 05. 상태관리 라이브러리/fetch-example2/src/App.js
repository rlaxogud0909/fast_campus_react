import "./App.css";
import CharacterCounter from "./components/ZustandExample/CharacterCounter";
import CurrentUserInfo from "./components/ZustandExample/CurrentUserInfo";
import Scratches from "./components/ZustandExample/Scratches";
// import TestMocking from "./components/TestMocking";
// import MobxExample from "./components/MobxExample";
// import TodoList from "./components/TodoList";
// import { observableTodoStore } from "./app/ObservableTodoStore";
// import { RecoilRoot } from "recoil";
// import FontButton from "./components/RecoilExample/FontButton";
// import Text from "./components/RecoilExample/Text";
// import CharacterCounter from "./components/RecoilExample/CharacterCounter";
// import TodoList from "./components/RecoilExample/Todo/TodoList";
// import CurrentUserInfo from "./components/RecoilExample/CurrentUserInfo";
import Text from "./components/ZustandExample/Text";
import TodoList from "./components/ZustandExample/Todo/TodoList";
import Profile from "./components/SWRExample/Profile";

function App() {
    return (
        <div className="App">
            {/* <TestMocking /> */}
            {/* <MobxExample /> */}
            {/* <TodoList store={observableTodoStore} /> */}
            {/* <RecoilRoot> */}
            {/* <FontButton />
                <Text />
                <CharacterCounter /> */}
            {/* <TodoList /> */}
            {/* <CurrentUserInfo /> */}
            {/* </RecoilRoot> */}
            <Text />
            <CharacterCounter />
            <TodoList />
            <CurrentUserInfo />
            <Scratches />
            <Profile />
        </div>
    );
}

export default App;
