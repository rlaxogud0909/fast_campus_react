import "./App.css";
import Chache from "./components/SWRExample/Chache";
import Fetcher from "./components/SWRExample/Fetcher";
// import TestMocking from "./components/TestMocking";
import Profile from "./components/SWRExample/Profile";

function App() {
    return (
        <div className="App">
            {/* <TestMocking /> */}
            {/* <Profile /> */}
            {/* <Chache /> */}
            <Fetcher />
        </div>
    );
}

export default App;
